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
  {title: `Fantastic Beasts`},
  {title: `Bohemian Rhapsody`},
  {title: `Macbeth`}
];

const onTitleButtonClick = () => {};

// Вы можете запустить все тесты или только определённый
// npm run test.jest -- -t '<Albums /> should render Cinderella'
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
