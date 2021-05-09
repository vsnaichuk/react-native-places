import { useEffect, useState } from "react";
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
  requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";

type ImgOptType = {
  [index: string]: any;
};

export const useImagePicker = () => {
  const [image, setImage] = useState<string>();

  const verifyPermission = async () => {
    const { granted } = await requestMediaLibraryPermissionsAsync();

    if (!granted) {
      alert("You need to enable permission to access the library.");
      return false;
    }
    return true;
  };

  const imgOpts = {
    mediaTypes: MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [16, 9],
    quality: 0.5,
  } as ImgOptType;

  const pickCameraImage = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) return;

    const resImage = await launchCameraAsync(imgOpts);

    if (!resImage.cancelled) {
      setImage(resImage.uri);
    }
  };

  const pickGalleryImage = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) return;

    const resImage = await launchImageLibraryAsync(imgOpts);

    if (!resImage.cancelled) {
      setImage(resImage.uri);
    }
  };

  return [image, pickCameraImage, pickGalleryImage] as const;
};
