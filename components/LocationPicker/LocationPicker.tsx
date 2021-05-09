import React, { FC, useEffect, useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import s from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { ActivityIndicator } from "react-native";
import MapImage from "../MapImage";
import { useLocation } from "../../hooks/useLocation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/navigationTypes";

type Props = {
  onLocationPicked: (location: LocationType) => void;
};

export type LocationType = { [index: string]: number } | null;

const LocationPicker: FC<Props> = ({ onLocationPicked }) => {
  const [pressCount, setPressCount] = useState<number>(0);
  const [pickedLocation, setPickedLocation] = useState<LocationType>();
  const [location, isFetching, getLocation] = useLocation(null);
  const { navigate } = useNavigation();
  const { params } = useRoute<RouteProp<RootStackParamList, "NewPlace">>();
  const mapPickedLocation = params?.mapPickedLocation;

  useEffect(() => {
    if (mapPickedLocation) {
      setPickedLocation(mapPickedLocation);
      onLocationPicked(mapPickedLocation);
    }
    if (!mapPickedLocation && location) {
      setPickedLocation(location);
      onLocationPicked(location);
    }
  }, [location, mapPickedLocation, onLocationPicked]);

  const pickOnMap = () => {
    navigate("Map", { initLocation: mapPickedLocation || location });
  };

  const getMapLocation = async () => {
    await getLocation();
  };

  const handlePress = async () => {
    if (pressCount === 0) {
      await getMapLocation();
      setPressCount(pressCount + 1);
    } else pickOnMap();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={s.locationPreview}>
        {pickedLocation && <MapImage location={pickedLocation} />}
        {isFetching && (
          <ActivityIndicator size="large" color={Colors.primary} />
        )}
        {!pickedLocation && !isFetching && (
          <MaterialCommunityIcons color={Colors.medium} name="map" size={50} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LocationPicker;
