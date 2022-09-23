// import { CreatePlace } from "./use-cases/place/create-place";
// import { GetPlaces } from "./use-cases/place/get-places";

// const createPlace = new CreatePlace();
// const getPlaces = new GetPlaces();

// const run = async () => {
//   const places = await getPlaces.execute({ country: "brazil" });
//   console.log("places: ", places);
// };

// run();
// // const newPlace = createPlace.execute({
//   title: "Bar SP",
//   description: "Um Bar em Sp",
//   image: "/none",
//   ctaLink: "www.google.com",
//   rating: 5.5,
//   country: "Brazil",
// });

// Promise.resolve(newPlace).then((v) => console.log(v));
import { GetPlaces } from "./use-cases/place/get-places";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = 3000;

app.get("/places", async (req: Request, res: Response) => {
  const getPlaces = new GetPlaces();

  const places = await getPlaces.execute({ country: "brazil" });
  res.json(places);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
