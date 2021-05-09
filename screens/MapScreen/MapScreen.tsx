import React, { FC, useCallback, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/navigationTypes";
import { RouteProp } from "@react-navigation/native";
import { LocationType } from "../../components/LocationPicker/LocationPicker";
import MapView, { Marker } from "react-native-maps";
import s from "./styles";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Platform } from "react-native";
import Screen from "../../components/Screen/Screen";
import HeaderButton from "../../components/HeaderButton";

const MapScreen: FC = () => {
  const { navigate, setOptions } = useNavigation();
  const {
    params: { initLocation },
  } = useRoute<RouteProp<RootStackParamList, "Map">>();

  const [selectedLocation, setSelectedLocation] = useState<LocationType>(
    initLocation
  );

  const mapRegion = {
    latitude: initLocation?.lat || 37.78,
    longitude: initLocation?.lng || -122.43,
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
    latitude: selectedLocation?.lat || initLocation.lat,
    longitude: selectedLocation?.lng || initLocation.lng,
  };

  const submitPickedLocation = useCallback(() => {
    if (!selectedLocation) {
      return;
    }
    navigate("NewPlace", { mapPickedLocation: selectedLocation });
  }, [selectedLocation]);

  useEffect(() => {
    setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Save"
            iconName={
              Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
            }
            onPress={submitPickedLocation}
          />
        </HeaderButtons>
      ),
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
