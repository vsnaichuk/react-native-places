import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NewPlaceScreen from "../screens/NewPlaceScreen/NewPlaceScreen";
import MapScreen from "../screens/MapScreen/MapScreen";
import { RootStackParamList } from "./navigationTypes";
import PlacesListScreen from "../screens/PlacesListScreen.tsx/PlacesListScreen";

const PlacesNavigator: FC = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Places"
        component={PlacesListScreen}
        options={{
          title: "Places",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        options={{
          title: "New Place",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />

      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Pick on Map",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default PlacesNavigator;
