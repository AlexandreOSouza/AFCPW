import { CreatePlace } from "./use-cases/place/create-place";
import { GetPlaces } from "./use-cases/place/get-places";

const createPlace = new CreatePlace();
const getPlaces = new GetPlaces();

getPlaces.execute({ country: "brazil" });

// const newPlace = createPlace.execute({
//   title: "Bar SP",
//   description: "Um Bar em Sp",
//   image: "/none",
//   ctaLink: "www.google.com",
//   rating: 5.5,
//   country: "Brazil",
// });

// Promise.resolve(newPlace).then((v) => console.log(v));
