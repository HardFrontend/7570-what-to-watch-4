import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import MovieList from "../small-movie-card-list/small-movie-card-list";

const mockStore = configureStore([]);

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
    id: 2,
    title: `Macbeth`,
    img: `img/macbeth.jpg`,
    genre: `comedy`,
    year: `2011`,
    videosrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 3,
    title: `Aviator`,
    img: `img/aviator.jpg`,
    genre: `comedy`,
    year: `2011`,
    videosrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }
];

const allGenres = [`All genres`, `drama`, `comedy`];

const onClick = () => {};
const onFilterClick = () => {};
const onShowMoreClick = () => {};

it(`Main should render films & Promo`, () => {
  const store = mockStore({
    sortGenre: `All genres`,
    films,
    filmsShowTo: 8,
    filmsShow: films
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            filmPromoName={FilmPromo.name}
            filmPromoGenre={FilmPromo.genre}
            filmPromoDate={FilmPromo.releaseDate}
            films={films}
            filmsShow={films}
            onClick={onClick}
            onFilterClick={onFilterClick}
            onShowMoreClick={onShowMoreClick}
            allGenres={allGenres}
          />, </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
