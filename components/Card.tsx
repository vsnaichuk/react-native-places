import React, { FC, ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const s = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: Colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
});

type Props = {
  children: ReactNode;
  style?: {};
};

const Card: FC<Props> = ({ children, style }) => {
  return <View style={[s.card, style]}>{children}</View>;
};

export default Card;
