import React, { FC, useContext, useEffect } from "react";
import Screen from "../../components/Screen/Screen";
import { observer } from "mobx-react-lite";
import s from "./styles";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { PlacesStackParams } from "../../navigation/navigationTypes";
import { RootStoreContext } from "../../store/store";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import MapPreview from "../../components/MapPreview";
import routes from "../../navigation/routes";

const PlaceDetailScreen: FC = observer(() => {
  const { navigate } = useNavigation();
  const { params } = useRoute<RouteProp<PlacesStackParams, "PlacesDetails">>();
  const {
    placesStore: { places },
  } = useContext(RootStoreContext);
  const place = places.find((place) => place.id === params?.placeId);
  const location = place?.location || {};

  const showOnMap = () => {
    navigate(routes.MAP, { initLocation: location });
  };

  return (
    <Screen style={s.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Image source={{ uri: place?.image }} style={s.image} />
        <TouchableOpacity style={s.mapPreview} onPress={showOnMap}>
          <MapPreview location={location} />
        </TouchableOpacity>
      </ScrollView>
    </Screen>
  );
});

export default PlaceDetailScreen;
