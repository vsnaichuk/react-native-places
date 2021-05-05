import React, { createContext, ReactNode } from "react";
import usePlacesContext from "./places/placesContext";
import { PlacesStoreSchema } from "./places/placesTypes";

type RootStoreSchema = {
  placesStore: PlacesStoreSchema;
};

type Props = {
  children: ReactNode;
};

// @ts-ignore
export const RootStoreContext = createContext<RootStoreSchema>(null);

const RootStore = ({ children }: Props) => {
  const placesContext = usePlacesContext();

  return (
    <RootStoreContext.Provider
      value={{
        placesStore: placesContext,
      }}
    >
      {children}
    </RootStoreContext.Provider>
  );
};

export default RootStore;
