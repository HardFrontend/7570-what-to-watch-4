import React from "react";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import GenresList from "./genres-list.jsx";
import Main from "../main/main";


Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);
const allGenres = [`All genres`, `drama`, `comedy`];

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

it(`Should filer link be pressed`, () => {
  const onFilterClick = jest.fn();
  const itemPreventDefoult = jest.fn();

  const store = mockStore({
    sortGenre: `All genres`,
    films,
    filmsShowTo: 8,
    filmsShow: films
  });

  const genresList = mount(
      <Provider store={store}>
        <GenresList
          films={films}
          sortGenre={`All Genres`}
          onFilterClick={onFilterClick}
        /></Provider>

  );

  const titleButtons = genresList.find(`.catalog__genres-link`);

  titleButtons.forEach((item) => {
    item.simulate(`click`, ({
      preventDefault: itemPreventDefoult
    }));
  });
  expect(itemPreventDefoult).toHaveBeenCalledTimes(2);
});
