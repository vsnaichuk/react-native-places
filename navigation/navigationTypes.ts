export type RootStackParamList = {
  Places: {};
  NewPlace: { mapPickedLocation: { [index: string]: number } | undefined };
  Map: { initLocation: { [index: string]: number } };
};
