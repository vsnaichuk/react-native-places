import React, { FC, ReactNode } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "./Text";
import Card from "./Card";

const s = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  detailsBox: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
});

type Props = {
  onSelect: () => void;
  title: string;
  image: string;
};

const PlaceItem: FC<Props> = ({ onSelect, title, image }) => {
  return (
    <Card>
      <TouchableOpacity onPress={onSelect}>
        <Image
          style={s.image}
          source={{
            uri: image,
          }}
        />
        <View style={s.detailsBox}>
          <Text style={s.title} numberOfLines={1}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default PlaceItem;
