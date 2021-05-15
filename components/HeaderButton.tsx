import React, { FC } from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

const CustomHeaderButton: FC = (props: any) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? Colors.white : Colors.primary}
    />
  );
};

export default CustomHeaderButton;
