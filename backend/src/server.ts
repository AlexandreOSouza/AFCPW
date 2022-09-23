import { GetPlaces } from "./use-cases/place/get-places";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = 3000;

app.use(express.json());

app.get("/places", async (req: Request, res: Response) => {
  const getPlaces = new GetPlaces();

  const places = await getPlaces.execute({ country: "brazil" });
  res.json(places);
});

app.post("/place", async (req: Request, res: Response) => {
  console.log(req.body);
  res.send();
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
