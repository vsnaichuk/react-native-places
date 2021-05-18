import React, { FC } from "react";
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import { LocationType } from "../store/places/placesTypes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const s = StyleSheet.create({
  mapImage: {
    width: "100%",
    height: "100%",
  },
});

type Props = {
  location: LocationType;
  loading?: boolean;
  style?: {};
};
const MapPreview: FC<Props> = ({ location, loading = false, style }) => {
  let imagePreviewUrl =
    location?.lat &&
    `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${location.lat},${location.lng}&key=${process.env.EXPO_GOOGLE_API_KEY}`;
  if (loading) {
    return <ActivityIndicator size="large" color={Colors.primary} />;
  }
  return (
    <>
      {imagePreviewUrl && (
        <Image style={s.mapImage} source={{ uri: imagePreviewUrl }} />
      )}
      {!imagePreviewUrl && !loading && (
        <MaterialCommunityIcons color={Colors.medium} name="map" size={50} />
      )}
    </>
  );
};

export default MapPreview;
