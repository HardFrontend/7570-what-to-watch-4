import React from "react";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const film =
  {
    id: 1,
    title: `Fantastic Beasts`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  }
;

it(`Should title button be pressed`, () => {
  const onTitleButtonClick = jest.fn();
  const smallMovieCard = mount(
      <SmallMovieCard
        film={film}
        onTitleButtonClick={onTitleButtonClick}
        onMouseOver={() => {}}
      />
  );

  const titleButton = smallMovieCard.find(`.small-movie-card__link`);
  titleButton.simulate(`click`);

  expect(onTitleButtonClick.mock.calls.length).toBe(1);
});

it(`smallMovieCard hover`, () => {
  const filmHover =
    {
      id: 1,
      title: `Fantastic Beasts`,
      img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
    }
  ;

  const onMouseOver = jest.fn();

  const smallMovieCard = mount(
      <SmallMovieCard
        film={filmHover}
        onTitleButtonClick={() => {}}
        onMouseOver={onMouseOver}
      />
  );

  smallMovieCard.find(`article.small-movie-card`).simulate(`mouseover`);

  expect(onMouseOver).toHaveBeenCalledTimes(1);

  onMouseOver.mockImplementation(() => filmHover.id);

  expect(onMouseOver()).toBe(1);
});
