import RootStore from "./store/store";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import PlacesNavigator from "./navigation/MainNavigator";
import { init } from "./helpers/db";

init()
  .then(() => {
    console.log("Initialized database");
  })
  .catch((err) => {
    console.log("Initializing db failed.");
    console.log(err);
  });

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <RootStore>
      <NavigationContainer>
        <PlacesNavigator />
      </NavigationContainer>
    </RootStore>
  );
};

export default App;
