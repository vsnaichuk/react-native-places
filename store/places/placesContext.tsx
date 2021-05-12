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
    location: {},
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
        console.log(e);
        alert("Something happened. Please try again later.");
      }

      runInAction(() => {
        store.loading = false;
      });
    },

    async createPlaceAction({ title, image, location }: PlaceModel) {
      runInAction(() => {
        store.loading = true;
      });

      try {
        const dbResult = await insertPlace(
          title,
          image,
          location?.lat,
          location?.lng
        );
        console.log(dbResult);
        runInAction(() => {
          store.places.push({
            id: dbResult.insertId,
            title,
            image,
            location,
          });
        });
      } catch (e) {
        console.log(e);
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
