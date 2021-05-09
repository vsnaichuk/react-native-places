import React, { FC, useEffect, useState } from "react";
import { Alert, Image, TouchableWithoutFeedback, View } from "react-native";
import s from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { useImagePicker } from "../../hooks/useImagePicker";

type Props = {
  onImageTaken: (imagePath: string) => void;
};

const ImagePicker: FC<Props> = ({ onImageTaken }) => {
  const [preview, pickCameraImage, pickGalleryImage] = useImagePicker();

  useEffect(() => {
    if (preview) {
      onImageTaken(preview);
    }
  }, [preview]);

  const handlePress = async () => {
    if (!preview)
      Alert.alert("Chose app", "Which app you want to use?", [
        { text: "Camera", onPress: () => pickCameraImage() },
        { text: "Gallery", onPress: () => pickGalleryImage() },
      ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={s.imagePreview}>
        {preview && <Image style={s.image} source={{ uri: preview }} />}

        {!preview && (
          <MaterialCommunityIcons
            color={Colors.medium}
            name="camera"
            size={50}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImagePicker;
