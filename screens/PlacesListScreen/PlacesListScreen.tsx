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
import { LocationType, PlaceModel } from "../../store/places/placesTypes";
import { ActivityIndicator, FlatList, Text } from "react-native";
import Card from "../../components/Card";
import { observer } from "mobx-react-lite";
import Colors from "../../constants/Colors";
import PlaceItem from "../../components/PlaceItem";

const PlacesListScreen: FC = observer(() => {
  const { navigate } = useNavigation();
  const {
    placesStore: { places, getPlacesAction, loading },
  } = useContext(RootStoreContext);

  useEffect(() => {
    getPlacesAction();
  }, []);

  const onSelectHandler = (id: string) => {
    navigate("PlacesDetails", {
      placeId: id,
    });
  };

  return (
    <Screen style={s.container}>
      {loading && (
        <ActivityIndicator style={{ flex: 1 }} color={Colors.primary} />
      )}
      {places && (
        <FlatList
          data={places}
          keyExtractor={(place: PlaceModel) => place.id}
          renderItem={({ item }) => (
            <PlaceItem onSelect={() => onSelectHandler(item.id)} {...item} />
          )}
        />
      )}
    </Screen>
  );
});

export default PlacesListScreen;
