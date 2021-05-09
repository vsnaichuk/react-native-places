import {
  getLastKnownPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { Alert } from "react-native";
import { useEffect, useState } from "react";
import { LocationType } from "../components/LocationPicker/LocationPicker";

export const useLocation = (initLocation: LocationType) => {
  const [isFetching, setIsFetching] = useState(false);
  const [location, setLocation] = useState(initLocation);

  const verifyPermission = async () => {
    const { granted } = await requestForegroundPermissionsAsync();

    if (!granted) {
      alert("Permission to access location was denied");
      return false;
    }
    return true;
  };

  const getLocation = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) return;
    setIsFetching(true);
    try {
      const {
        coords: { latitude, longitude },
      } = await getLastKnownPositionAsync({
        timeout: 5000,
      });
      setLocation({
        lat: latitude,
        lng: longitude,
      });
    } catch (err) {
      console.log(err);
      Alert.alert("Could not fetch location!", "Please try again later", [
        { text: "Okay" },
      ]);
    }
    setIsFetching(false);
  };

  // useEffect(() => {
  //   getLocation();
  // }, []);

  return [location, isFetching, getLocation] as const;
};
