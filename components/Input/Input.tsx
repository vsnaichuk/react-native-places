import React, { FC } from "react";
import { TextInput, View } from "react-native";
import s from "./styles";
import Colors from "../../constants/Colors";

type Props = {
  width?: string;
  [inputPropName: string]: any;
};

const Input: FC<Props> = ({ width = "100%", ...otherProps }) => {
  return (
    <View style={[s.container, { width }]}>
      <TextInput
        placeholderTextColor={Colors.medium}
        style={s.textInput}
        {...otherProps}
      />
    </View>
  );
};

export default Input;
