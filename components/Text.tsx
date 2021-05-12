import React, { FC, ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

const s = StyleSheet.create({
  text: {
    color: Colors.dark,
    fontSize: 18,
  },
});

type Props = {
  children: ReactNode;
  style: object;
  [index: string]: any;
};

const AppText: FC<Props> = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[s.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
