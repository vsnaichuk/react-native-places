import React from "react";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import { createStackNavigator } from "@react-navigation/stack";

const PlacesNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};

export default PlacesNavigator;
