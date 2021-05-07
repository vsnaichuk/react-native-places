import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  locationPreview: {
    alignItems: "center",
    backgroundColor: Colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    marginVertical: 10,
    overflow: "hidden",
    width: 100,
  },
  mapImage: {
    height: "100%",
    width: "100%",
  },
});

export default styles;
