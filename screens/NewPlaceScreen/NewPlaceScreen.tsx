import React, { useState, useCallback, FC } from "react";
import { useContext } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { RootStoreContext } from "../../store/store";
import Screen from "../../components/Screen/Screen";
import Button from "../../components/Button/Button";
import s from "./styles";
import Colors from "../../constants/Colors";
import Input from "../../components/Input/Input";

const NewPlaceScreen: FC = () => {
  const [titleValue, setTitleValue] = useState("");
  const { placesStore } = useContext(RootStoreContext);

  const titleChangeHandler = (text: string) => {
    setTitleValue(text);
  };

  const savePlaceHandler = async () => {
    await placesStore.createPlaceAction({ title: titleValue });
    await placesStore.getPlacesAction();
  };

  return (
    <Screen style={s.container}>
      <View style={s.form}>
        <Input
          placeholder="Title"
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <Button title="Save Place" onPress={savePlaceHandler} />
      </View>
    </Screen>
  );
};

export default NewPlaceScreen;
