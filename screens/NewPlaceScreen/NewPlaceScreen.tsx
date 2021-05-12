import React, { useState, useCallback, FC, useEffect } from "react";
import { useContext } from "react";
import { RootStoreContext } from "../../store/store";
import Screen from "../../components/Screen/Screen";
import Button from "../../components/Button/Button";
import s from "./styles";
import ImagePicker from "../../components/ImagePicker/ImagePicker";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/Input/Input";
import LocationPicker from "../../components/LocationPicker/LocationPicker";
import { LocationType } from "../../store/places/placesTypes";

const NewPlaceScreen: FC = () => {
  const { placesStore } = useContext(RootStoreContext);
  const navigation = useNavigation();

  const [titleValue, setTitleValue] = useState<string>("");

  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<LocationType>({});

  const titleChangeHandler = (text: string) => setTitleValue(text);
  const imageTakenHandler = (imagePath: string) => setSelectedImage(imagePath);

  const locationPickedHandler = useCallback((location) => {
    setSelectedLocation(location);
  }, []);

  const savePlaceHandler = async () => {
    await placesStore.createPlaceAction({
      title: titleValue,
      image: selectedImage,
      location: selectedLocation,
    });
    await placesStore.getPlacesAction();
    // navigation.goBack();
  };

  return (
    <Screen style={s.container}>
      <Input
        placeholder="Title"
        onChangeText={titleChangeHandler}
        value={titleValue}
      />
      <ImagePicker onImageTaken={imageTakenHandler} />
      <LocationPicker onLocationPicked={locationPickedHandler} />
      <Button title="Save Place" onPress={savePlaceHandler} />
    </Screen>
  );
};

export default NewPlaceScreen;
