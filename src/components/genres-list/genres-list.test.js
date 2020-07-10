import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import GenresList from "./genres-list.jsx";

const mockStore = configureStore([]);

const allGenres = [`All genres`, `drama`, `comedy`];
const onFilterClick = () => {};
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

it(`GenresList render`, () => {
  const store = mockStore({
    sortGenre: `All genres`,
    films,
    filmsShowTo: 8,
    filmsShow: films
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <GenresList
            genres={allGenres}
            onFilterClick={onFilterClick}
          />, </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
