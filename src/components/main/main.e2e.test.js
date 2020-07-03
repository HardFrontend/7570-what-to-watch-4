import React from "react";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import Main from "./main.jsx";
import App from "../app/app";

const mockStore = configureStore([]);

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
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `comedy`,
    year: `2011`,
    videosrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    img: `img/bohemian-rhapsody.jpg`,
    genre: `comedy`,
    year: `2011`,
    videosrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 3,
    title: `Macbeth`,
    img: `img/macbeth.jpg`,
    genre: `comedy`,
    year: `2011`,
    videosrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
];

const allGenres = [`All genres`, `drama`, `comedy`];

it(`Should title button be pressed`, () => {
  const onClick = jest.fn();
  const onFilterClick = jest.fn();

  const store = mockStore({
    sortGenre: `All genres`,
    allFilms: films,
    filmsShow: films
  });

  const main = mount(
      <Provider store={store}>
        <Main
          filmPromoName={FilmPromo.name}
          filmPromoGenre={FilmPromo.genre}
          filmPromoDate={FilmPromo.releaseDate}
          films={films}
          allGenres={allGenres}
          onFilterClick={onFilterClick}
          onClick={onClick}
        /></Provider>
  );

  const titleButtons = main.find(`.small-movie-card__link`);

  titleButtons.forEach((button) => button.simulate(`click`));

  expect(onClick.mock.calls.length).toBe(films.length);
});
