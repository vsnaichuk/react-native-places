import React, { FC, useEffect, useState } from "react";
import { TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import s from "./styles";
import { useLocation } from "../../hooks/useLocation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { CreatePlaceStackParams } from "../../navigation/navigationTypes";
import { LocationType } from "../../store/places/placesTypes";
import MapPreview from "../MapPreview";
import routes from "../../navigation/routes";

type Props = {
  onLocationPicked: (location: LocationType) => void;
};

const LocationPicker: FC<Props> = ({ onLocationPicked }) => {
  const [pressCount, setPressCount] = useState<number>(0);
  const [pickedLocation, setPickedLocation] = useState<LocationType>({});
  const [location, isFetching, getLocation] = useLocation({});
  const { navigate } = useNavigation();
  const { params } = useRoute<RouteProp<CreatePlaceStackParams, "NewPlace">>();
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
    navigate(routes.MAP, { initLocation: mapPickedLocation || location });
  };

  const handlePress = async () => {
    if (pressCount === 0) {
      await getLocation();
      setPressCount(pressCount + 1);
    } else pickOnMap();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={s.mapPreview}>
        <MapPreview location={pickedLocation} loading={isFetching} />
      </View>
    </TouchableOpacity>
  );
};

export default LocationPicker;
