export type CreatePlaceParams = {
  NewPlace: { mapPickedLocation: { [index: string]: number } | undefined };
  Map: { initLocation: { [index: string]: number } };
};

export type RootTabParams = {
  Places: {};
  CreatePlace: {};
  Map: {};
};
