import React, { FC } from "react";
import { Image, StyleSheet } from "react-native";
import { LocationModel } from "./LocationPicker/LocationPicker";

type Props = {
  location: LocationModel;
};

const MapImage: FC<Props> = ({ location }) => {
  let imagePreviewUrl;
  console.log(process.env.EXPO_GOOGLE_API_KEY);

  if (location) {
    imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${location.lat},${location.lng}&key=${process.env.EXPO_GOOGLE_API_KEY}`;
  }

  return <Image style={styles.mapImage} source={{ uri: imagePreviewUrl }} />;
};

const styles = StyleSheet.create({
  mapImage: {
    width: "100%",
    height: "100%",
  },
});

export default MapImage;
