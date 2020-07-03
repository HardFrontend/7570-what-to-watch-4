import {extend} from "./utils.js";
import films from "./mocks/films.js";

const initialState = {
  sortGenre: `All genres`,
  allFilms: films,
  filmsShow: films
};

const ActionType = {
  FILTER_CHANGE: `FILTER_CHANGE`,
  FILMS_FILTER: `FILMS_FILTER`,
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_CHANGE:
      console.log(`state ` + state.sortGenre);

      if(action.payload === `All genres`) {
        return extend(state, {
          sortGenre: `All genres`,
          filmsShow: state.allFilms
        });
      }
      return extend(state, {
        sortGenre: action.payload,
        filmsShow: getSortedFilms(films, action.payload)
      });

    case ActionType.FILMS_FILTER:
      return extend(state, {
        mistakes: state.mistakes + action.payload,
      });
  }

  console.log(state);
  return state;
};


export {reducer, ActionType, ActionCreator};
