import { addDoc, collection, getDocs } from "firebase/firestore";
import { Place } from "../../entities/place";
import { app, firestore } from "../firebase";

export async function getPlaces(): Promise<Place[]> {
  const placesCollection = collection(firestore, "places");
  const placesSnapshot = await getDocs(placesCollection);

  const placeList = placesSnapshot.docs.map((doc) =>
    doc.data()
  ) as Array<Place>;
  return placeList;
}

export async function addPlace(place: Place) {
  const placesCollection = collection(firestore, "places");
  try {
    const returnDoc = await addDoc(placesCollection, place.getProps);
    return returnDoc;
  } catch (e) {
    console.log(e);
  }
}
