import React from "react";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

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
    id: 3,
    title: `Macbeth`,
    img: `img/macbeth.jpg`
  },
];

it(`Should title button be pressed`, () => {
  const onTitleButtonClick = jest.fn();

  const main = mount(
      <Main
        filmPromoName={FilmPromo.name}
        filmPromoGenre={FilmPromo.genre}
        filmPromoDate={FilmPromo.releaseDate}
        films={films}

        onTitleButtonClick={onTitleButtonClick}
      />
  );

  const titleButtons = main.find(`.small-movie-card__link`);

  titleButtons.forEach((button) => button.simulate(`click`));

  expect(onTitleButtonClick.mock.calls.length).toBe(films.length);
});
