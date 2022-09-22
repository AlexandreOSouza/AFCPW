import { Place } from "../../../entities/place";
import { addPlace } from "../../../services/place";

interface Request {
  title: string;
  description: string;
  image: string;
  ctaLink: string;
  rating: number;
  country: string;
}

type Response = Place;

export class CreatePlace {
  // this method is responsible to create a new place
  async execute({
    title,
    description,
    image,
    ctaLink,
    rating,
    country,
  }: Request): Promise<Response> {
    const newPlace = new Place({
      title,
      description,
      image,
      ctaLink,
      rating,
      country,
    });
    await addPlace(newPlace);
    return newPlace;
  }
}
