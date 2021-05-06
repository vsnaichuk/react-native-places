import React, { FC, useState } from "react";
import {
  Alert,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import s from "./styles";
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
  requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

type Props = {
  onImageTaken: (imagePath: string) => void;
};

const ImagePicker: FC<Props> = ({ onImageTaken }) => {
  const [preview, setPreview] = useState("");

  const verifyPermission = async () => {
    const { granted } = await requestMediaLibraryPermissionsAsync();

    if (!granted) {
      alert("You need to enable permission to access the library.");
      return false;
    }
    return true;
  };

  const pickImage = async (camera: boolean = false) => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) return;

    const imgOpts = {
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    };

    const resImage = camera
      ? await launchCameraAsync(imgOpts)
      : await launchImageLibraryAsync(imgOpts);

    if (!resImage.cancelled) {
      setPreview(resImage.uri);
      onImageTaken(resImage.uri);
    }
  };

  const handlePress = async () => {
    if (!preview)
      Alert.alert("Chose app", "Which app you want to use?", [
        { text: "Camera", onPress: () => pickImage(true) },
        { text: "Gallery", onPress: () => pickImage() },
      ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={s.imagePreview}>
        {preview ? (
          <Image style={s.image} source={{ uri: preview }} />
        ) : (
          <MaterialCommunityIcons
            color={Colors.medium}
            name="camera"
            size={40}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImagePicker;
