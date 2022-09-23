import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { Place } from "../../entities/place";
import { firestore } from "../firebase";

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
    const newId = returnDoc.id;
    await updateDoc(returnDoc, { id: newId });
    place.setId = newId;
    return place;
  } catch (e) {
    console.log(e);
  }
}
