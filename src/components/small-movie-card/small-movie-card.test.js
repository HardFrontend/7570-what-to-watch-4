import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

const film =
  {
    id: 0,
    title: `Fantastic Beasts`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  };

const onTitleButtonClick = () => {};
const onMouseOver = () => {};

// Вы можете запустить все тесты или только определённый
// npm run test.jest -- -t '<Albums /> should render Cinderella'
it(`Main should render films & Promo`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      film={film}
      onTitleButtonClick={onTitleButtonClick}
      onMouseOver={onMouseOver}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
