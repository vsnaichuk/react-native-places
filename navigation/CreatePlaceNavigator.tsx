import React, { FC } from "react";
import NewPlaceScreen from "../screens/NewPlaceScreen/NewPlaceScreen";
import MapScreen from "../screens/MapScreen/MapScreen";
import { CreatePlaceParams } from "./navigationTypes";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

const CreatePlaceNavigator: FC = () => {
  const Stack = createStackNavigator<CreatePlaceParams>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NewPlace" component={NewPlaceScreen} />

      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerShown: true,
          title: "Pick on Map",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor:
            Platform.OS === "android" ? Colors.white : Colors.primary,
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default CreatePlaceNavigator;
