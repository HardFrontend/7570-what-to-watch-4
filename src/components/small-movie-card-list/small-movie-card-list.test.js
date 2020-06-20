import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./small-movie-card-list.jsx";

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
const onMouseOver = () => {};

// Вы можете запустить все тесты или только определённый
// npm run test.jest -- -t '<Albums /> should render Cinderella'
it(`Main should render films & Promo`, () => {
  const tree = renderer
    .create(<MovieList
      films={films}
      onTitleButtonClick={onTitleButtonClick}
      onMouseOver={onMouseOver}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
