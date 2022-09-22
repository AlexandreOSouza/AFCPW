import { expect, test } from "vitest";
import { CreatePlace } from ".";
import { Place } from "../../../entities/place";

test("Create an place with execute", () => {
  const createPlace = new CreatePlace();

  expect(
    createPlace.execute({
      title: "Bar SP",
      description: "Um Bar em Sp",
      image: "/none",
      ctaLink: "www.google.com",
      rating: 5.5,
      country: "Brazil",
    })
  ).resolves.toBeInstanceOf(Place);
});
