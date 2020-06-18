import React from "react";
import Enzyme, {shallow} from "enzyme";
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
  {title: `Fantastic Beasts`},
  {title: `Bohemian Rhapsody`},
  {title: `Macbeth`}
];

it(`Should title button be pressed`, () => {
  const onTitleButtonClick = jest.fn();

  const main = shallow(
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
