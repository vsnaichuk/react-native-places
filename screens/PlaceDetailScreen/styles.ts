import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 0,
    paddingHorizontal: 20,
    backgroundColor: Colors.light,
  },
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "100%",
    height: 300,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    marginVertical: 20,
    height: "35%",
    minHeight: 300,
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 20,
  },
});

export default styles;
