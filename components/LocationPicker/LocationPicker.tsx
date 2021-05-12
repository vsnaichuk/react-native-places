import React, { FC, useEffect, useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import s from "./styles";
import { useLocation } from "../../hooks/useLocation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/navigationTypes";
import { LocationType } from "../../store/places/placesTypes";
import MapPreview from "../MapPreview";

type Props = {
  onLocationPicked: (location: LocationType) => void;
};

const LocationPicker: FC<Props> = ({ onLocationPicked }) => {
  const [pressCount, setPressCount] = useState<number>(0);
  const [pickedLocation, setPickedLocation] = useState<LocationType>({});
  const [location, isFetching, getLocation] = useLocation({});
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
      <View style={s.mapPreview}>
        <MapPreview location={pickedLocation} loading={isFetching} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LocationPicker;
