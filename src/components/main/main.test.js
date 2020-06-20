import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

// Для тестов мы готовим отдельные моки.
// Не следует импортировать моки, которые
// применяются для приложения.
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


const onTitleButtonClick = () => {};

it(`Main should render films & Promo`, () => {
  const tree = renderer
    .create(<Main
      filmPromoName={FilmPromo.name}
      filmPromoGenre={FilmPromo.genre}
      filmPromoDate={FilmPromo.releaseDate}
      films={films}
      onTitleButtonClick={onTitleButtonClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
