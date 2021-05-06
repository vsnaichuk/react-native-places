import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import s from "./styles";
import Colors from "../../constants/Colors";

type Props = {
  title: string;
  onPress: () => void;
  color?: string;
};

const Button: FC<Props> = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity
      style={[s.button, { backgroundColor: color || Colors.primary }]}
      onPress={onPress}
    >
      <Text style={s.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
