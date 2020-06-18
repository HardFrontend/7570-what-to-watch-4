import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import Main from "../main/main";

const FilmPromo = {
  name: `The Grand Budapest Hotel`,
  genre: `Horor`,
  releaseDate: 2010,
};

const films = [
  {title: `Fantastic Beasts`},
  {title: `Bohemian Rhapsody`},
  {title: `Macbeth`}
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      filmPromoName={FilmPromo.name}
      filmPromoGenre={FilmPromo.genre}
      filmPromoDate={FilmPromo.releaseDate}
      films={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
