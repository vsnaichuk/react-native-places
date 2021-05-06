import { PlaceModel, PlacesStateType } from "./placesTypes";
import { useLocalObservable } from "mobx-react-lite";
import { runInAction } from "mobx";
import { fetchPlaces, insertPlace } from "../../helpers/db";

const initialValues: PlacesStateType = {
  places: [] as PlaceModel[],
  place: {
    id: "",
    title: "",
    image: "",
  } as PlaceModel,
  loading: false,
};

const PlacesContext = () => {
  const store = useLocalObservable(() => ({
    /*observables*/
    ...initialValues,

    /*asynchronous actions*/
    async getPlacesAction() {
      runInAction(() => {
        store.loading = true;
      });

      try {
        const dbResult = await fetchPlaces();
        console.log(dbResult);
        runInAction(() => {
          store.places = dbResult.rows._array;
        });
      } catch (e) {
        alert("Something happened. Please try again later.");
      }

      runInAction(() => {
        store.loading = false;
      });
    },

    async createPlaceAction(newPlace: PlaceModel) {
      runInAction(() => {
        store.loading = true;
      });

      try {
        const dbResult = await insertPlace(newPlace);
        console.log(dbResult);
        runInAction(() => {
          store.places.push({
            id: dbResult.insertId,
            title: newPlace.title,
            image: newPlace.image,
          });
        });
      } catch (e) {
        alert("Something happened. Please try again later.");
      }

      runInAction(() => {
        store.loading = false;
      });
    },
  }));

  return store;
};

export default PlacesContext;
