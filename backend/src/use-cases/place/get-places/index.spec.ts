import { expect, test } from "vitest";
import { GetPlaces } from ".";
import { Place } from "../../../entities/place";

test("Get places", () => {
  const getPlaces = new GetPlaces();

  expect(
    getPlaces.execute({
      country: "Brazil",
    })
  ).resolves.toBeInstanceOf(Array<Place>);
});
