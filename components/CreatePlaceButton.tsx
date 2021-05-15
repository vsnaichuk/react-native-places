import React, { FC } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

type Props = {
  onPress: () => void;
};

const s = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderColor: Colors.white,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 20,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
});

const CreatePlaceButton: FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={s.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={Colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CreatePlaceButton;
