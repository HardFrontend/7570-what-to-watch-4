import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import GenresList from "./genres-list.jsx";

const mockStore = configureStore([]);

const allGenres = [`All genres`, `drama`, `comedy`];
const onFilterClick = () => {};

it(`GenresList render`, () => {
  const store = mockStore({
    sortGenre: `All genres`,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <GenresList
            genres={allGenres}
            onFilterClick={onFilterClick} sortGenre={`all-genres`}
          />, </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
