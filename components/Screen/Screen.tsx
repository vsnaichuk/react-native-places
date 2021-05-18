import React, { FC, ReactNode } from "react";
import { SafeAreaView, View } from "react-native";
import s from "./styles";

type Props = {
  children: ReactNode;
  style: {};
};

const Screen: FC<Props> = ({ children, style }) => {
  return (
    <SafeAreaView style={[s.screen, style]}>
      <View style={[s.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;
