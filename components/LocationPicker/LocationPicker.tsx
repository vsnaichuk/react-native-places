import React, { FC, useState } from "react";
import {
  Alert,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import s from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { ActivityIndicator } from "react-native";
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";

type CoordsModel = {
  lat: number;
  lng: number;
};
type Props = {
  onLocationPicked: (coords: CoordsModel) => void;
};

const LocationPicker: FC<Props> = ({ onLocationPicked }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [location, setLocation] = useState<CoordsModel>();

  const verifyPermission = async () => {
    const { granted } = await requestForegroundPermissionsAsync();

    if (!granted) {
      alert("Permission to access location was denied");
      return false;
    }
    return true;
  };

  const pickOnMap = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) return;

    setIsFetching(true);
    try {
      const { coords } = await getCurrentPositionAsync({
        timeout: 5000,
      });
      setLocation({
        lat: coords.latitude,
        lng: coords.longitude,
      });
      onLocationPicked({
        lat: coords.latitude,
        lng: coords.longitude,
      });
    } catch (err) {
      Alert.alert(
        "Could not fetch location!",
        "Please try again later or pick a location on the map.",
        [{ text: "Okay" }]
      );
    }
    setIsFetching(false);
  };

  const handlePress = async () => {
    await pickOnMap();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={s.locationPreview}>
        {location && (
          <Image style={s.mapImage} source={{ uri: GoogleMapsApiUrl }} />
        )}
        {isFetching && (
          <ActivityIndicator size="large" color={Colors.primary} />
        )}
        {!(location && isFetching) && (
          <MaterialCommunityIcons color={Colors.medium} name="map" size={40} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LocationPicker;
