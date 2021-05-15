export type PlacesStateType = {
  places: PlaceModel[];
  place: PlaceModel;
  loading: boolean;
};

export type LocationType = {
  [index: string]: number;
};

export type PlaceModel = {
  id: string;
  title: string;
  image: string;
  location: LocationType;
};

export type PlacesActionType = {
  /*async*/
  getPlacesAction: () => Promise<void>;
  createPlaceAction: (place: PlaceModel) => Promise<void>;
};

export type PlacesStoreSchema = {} & PlacesStateType & PlacesActionType;
