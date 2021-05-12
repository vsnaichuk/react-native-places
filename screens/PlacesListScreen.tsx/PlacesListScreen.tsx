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
import { FlatList, Text } from "react-native";
import Card from "../../components/Card";

const PlacesListScreen: FC = () => {
  const { placesStore } = useContext(RootStoreContext);

  useEffect(() => {
    (async () => {
      await placesStore.getPlacesAction();
      console.log(placesStore.places);
    })();
  }, [placesStore]);

  return (
    <Screen style={s.container}>
      {placesStore.loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={placesStore.places}
          keyExtractor={(place) => place.id}
          renderItem={({ item }) => <Card {...item} />}
        />
      )}
    </Screen>
  );
};

export default PlacesListScreen;
