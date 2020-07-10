import {extend} from "./utils.js";
import films from "./mocks/films.js";

const initialState = {
  sortGenre: `All genres`,
  films: films,
  //filmsShow: films,
  filmsShowTo: 8
};


let sliceFilms = (state = initialState) => {
  return extend(state, {
    allFilms: initialState.films.slice(0, 8)
  });
};

sliceFilms();

const ActionType = {
  FILTER_CHANGE: `FILTER_CHANGE`,
  FILMS_FILTER: `FILMS_FILTER`,
  SLICE_FILMS: `SLICE_FILMS`,
};

const getSortedFilms = (items, genre) => {
  let sortedFilms = [];

  items.forEach((film) => {
    if (film.genre === genre) {
      sortedFilms.push(film);
    }
  }
  );

  return sortedFilms;
};

console.log(getSortedFilms(films, `drama`));

const ActionCreator = {
  filterChange: (id) => ({
    type: ActionType.FILTER_CHANGE,
    payload: id
  }),

  sliceFilms: () => ({
    type: ActionType.SLICE_FILMS,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_CHANGE:
      console.log(`state ` + state.sortGenre);
      if (action.payload === `All genres`) {
        return extend(state, {
          sortGenre: `All genres`,
          films: initialState.films,
          filmsShowTo: 8
        });
      }
      return extend(state, {
        sortGenre: action.payload,
        films: getSortedFilms(films, action.payload),
        filmsShowTo: 8
      });

    case ActionType.SLICE_FILMS:
      console.log(`ActionType.SLICE_FILMS`)
      return extend(state, {
        filmsShowTo: state.filmsShowTo + 8,
      });
  }

  console.log(state);
  return state;
};


export {reducer, ActionType, ActionCreator};
