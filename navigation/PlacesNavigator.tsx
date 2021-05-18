import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PlacesListScreen from "../screens/PlacesListScreen/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen/PlaceDetailScreen";
import { PlacesStackParams } from "./navigationTypes";

const PlacesNavigator: FC = () => {
  const Stack = createStackNavigator<PlacesStackParams>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PlacesList" component={PlacesListScreen} />

      <Stack.Screen name="PlacesDetails" component={PlaceDetailScreen} />
    </Stack.Navigator>
  );
};

export default PlacesNavigator;
