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
  {
    id: 0,
    title: `Fantastic Beasts`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    img: `img/bohemian-rhapsody.jpg`
  },
  {
    id: 2,
    title: `Macbeth`,
    img: `img/macbeth.jpg`
  },
  {
    id: 3,
    title: `Aviator`,
    img: `img/aviator.jpg`
  }
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
