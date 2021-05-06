import React, { useState, useCallback, FC } from "react";
import { useContext } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { RootStoreContext } from "../../store/store";
import Screen from "../../components/Screen/Screen";
import Button from "../../components/Button/Button";
import s from "./styles";
import Colors from "../../constants/Colors";
import ImagePicker from "../../components/Input/ImagePicker";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/ImagePicker/Input";

const NewPlaceScreen: FC = () => {
  const { placesStore } = useContext(RootStoreContext);
  const navigation = useNavigation();

  const [titleValue, setTitleValue] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedLocation, setSelectedLocation] = useState({});

  const titleChangeHandler = (text: string) => {
    setTitleValue(text);
  };
  const imageTakenHandler = (imagePath: string) => {
    setSelectedImage(imagePath);
  };
  const locationPickedHandler = useCallback((location: object) => {
    setSelectedLocation(location);
  }, []);

  const savePlaceHandler = async () => {
    await placesStore.createPlaceAction({ title: titleValue });
    navigation.goBack();
  };

  return (
    <Screen style={s.container}>
      <Input
        placeholder="Title"
        onChangeText={titleChangeHandler}
        value={titleValue}
      />
      <ImagePicker onImageTaken={imageTakenHandler} />
      {/*<LocationPicker*/}
      {/*  navigation={navigation}*/}
      {/*  onLocationPicked={locationPickedHandler}*/}
      {/*/>*/}
      <Button title="Save Place" onPress={savePlaceHandler} />
    </Screen>
  );
};

export default NewPlaceScreen;
