import RootStore from "./store/store";
import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigation/MainNavigator";
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

const App: FC<Props> = () => {
  return (
    <RootStore>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </RootStore>
  );
};

export default App;
