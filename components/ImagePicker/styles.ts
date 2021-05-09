import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  imagePreview: {
    alignItems: "center",
    backgroundColor: Colors.light,
    borderRadius: 15,
    height: 150,
    justifyContent: "center",
    marginVertical: 10,
    overflow: "hidden",
    width: 150,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default styles;
