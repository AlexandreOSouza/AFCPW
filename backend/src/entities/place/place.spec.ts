import { expect, test } from "vitest";
import { Place } from ".";

test("Create an place", () => {
  const place = new Place({
    title: "Bar SP",
    description: "Um Bar em Sp",
    image: "/none",
    ctaLink: "www.google.com",
    rating: 5.5,
    country: "Brazil",
  });

  expect(place).toBeInstanceOf(Place);
  expect(place.country).toEqual("Brazil");
});
