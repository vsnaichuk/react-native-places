import React, { FC, useCallback, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CreatePlaceParams } from "../../navigation/navigationTypes";
import { RouteProp } from "@react-navigation/native";
import { LocationType } from "../../store/places/placesTypes";
import MapView, { Marker } from "react-native-maps";
import s from "./styles";
import Screen from "../../components/Screen/Screen";
import routes from "../../navigation/routes";
import MapHeaderButton from "./MapHeaderButton";

const MapScreen: FC = () => {
  const { navigate, setOptions } = useNavigation();
  const { params } = useRoute<RouteProp<CreatePlaceParams, "Map">>();
  const [selectedLocation, setSelectedLocation] = useState<LocationType>(
    params?.initLocation || {}
  );

  const mapRegion = {
    latitude: selectedLocation?.lat || 37.78,
    longitude: selectedLocation?.lng || -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = (event: any) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  let markerCoordinates = {
    latitude: selectedLocation?.lat || 37.78,
    longitude: selectedLocation?.lng || -122.43,
  };

  const submitPickedLocation = useCallback(() => {
    if (!selectedLocation) {
      return;
    }
    navigate(routes.NEW_PLACE, { mapPickedLocation: selectedLocation });
  }, [selectedLocation]);

  useEffect(() => {
    setOptions({
      headerRight: () => <MapHeaderButton onPress={submitPickedLocation} />,
    });
  }, [submitPickedLocation]);

  return (
    <Screen style={s.container}>
      <MapView style={s.map} region={mapRegion} onPress={selectLocationHandler}>
        {markerCoordinates && (
          <Marker title="Picked Location" coordinate={markerCoordinates} />
        )}
      </MapView>
    </Screen>
  );
};

export default MapScreen;
