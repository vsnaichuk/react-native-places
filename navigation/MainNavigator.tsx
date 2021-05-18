import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParams } from "./navigationTypes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CreatePlaceNavigator from "./CreatePlaceNavigator";
import CreatePlaceButton from "../components/CreatePlaceButton";
import MapScreen from "../screens/MapScreen/MapScreen";
import routes from "./routes";
import PlacesNavigator from "./PlacesNavigator";

const MainNavigator: FC = () => {
  const Tab = createBottomTabNavigator<RootTabParams>();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Places"
        component={PlacesNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CreatePlace"
        component={CreatePlaceNavigator}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <CreatePlaceButton
              onPress={() => navigation.navigate(routes.CREATE_PLACE)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
