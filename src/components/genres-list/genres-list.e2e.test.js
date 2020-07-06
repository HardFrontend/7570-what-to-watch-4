import React from "react";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import GenresList from "./genres-list.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

const allGenres = [`All genres`, `drama`, `comedy`];

it(`Should filer link be pressed`, () => {
  const onClick = jest.fn();

  const genresList = mount(
      <GenresList
        genres={allGenres}
        onFilterClick={onClick}
        sortGenre={`all-genres`}
      />
  );

  const titleButtons = genresList.find(`.catalog__genres-link`);
  titleButtons.forEach((button) => button.simulate(`click`));

  expect(onClick.mock.calls.length).toBe(allGenres.length);
});
