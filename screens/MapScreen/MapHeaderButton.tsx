import React, { FC } from "react";
import { Platform } from "react-native";
import HeaderButton from "../../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

type Props = {
  onPress: () => void;
};

const MapHeaderButton: FC<Props> = ({ onPress }) => {
  return (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Save"
        iconName={Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"}
        onPress={onPress}
      />
    </HeaderButtons>
  );
};

export default MapHeaderButton;
