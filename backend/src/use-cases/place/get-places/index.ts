import { Place } from "../../../entities/place";

interface Request {
  country: string;
}

type Response = Place[];

export class GetPlaces {
  // this method is responsible to return a list of places based on country
  async execute({ country }: Request): Promise<Response> {
    return [];
  }
}