export type RootTabParams = {
  Places: {};
  CreatePlace: {};
  Map: {};
};

export type PlacesStackParams = {
  PlacesList: {};
  PlacesDetails: { placeId: string };
};

export type CreatePlaceStackParams = {
  NewPlace: { mapPickedLocation: { [index: string]: number } | undefined };
  Map: { initLocation: { [index: string]: number } };
};
