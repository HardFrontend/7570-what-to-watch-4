import {extend} from "./../../utils.js";

const DISPLAYED_NUMBER_OF_FILMS = 8;

const initialState = {
  sortGenre: `All genres`,
  countDisplayedFilms: DISPLAYED_NUMBER_OF_FILMS,
  playableMovie: null
};

const ActionType = {
  FILTER_CHANGE: `FILTER_CHANGE`,
  FILMS_FILTER: `FILMS_FILTER`,
  SLICE_FILMS: `SLICE_FILMS`,
  MOVIE_TO_WATCH: `MOVIE_TO_WATCH`,
  INCREASE_COUNT_DISPLAYED_FILMS: `INCREASE_COUNT_DISPLAYED_FILMS`
};

const ActionCreator = {
  filterChange: (id) => ({
    type: ActionType.FILTER_CHANGE,
    payload: id
  }),

  sliceFilms: () => ({
    type: ActionType.SLICE_FILMS,
  }),

  movieToWatch: (film) => ({
    type: ActionType.MOVIE_TO_WATCH,
    payload: film
  }),

  increaseCountDisplayedFilms: (amount) => ({
    type: ActionType.INCREASE_COUNT_DISPLAYED_FILMS,
    payload: amount
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
        //films: getSortedFilms(films, action.payload),
        countDisplayedFilms: DISPLAYED_NUMBER_OF_FILMS
      });

    case ActionType.SLICE_FILMS:
      console.log(`ActionType.SLICE_FILMS`);
      return extend(state, {
        filmsShowTo: state.filmsShowTo + 8,
      });
    case ActionType.MOVIE_TO_WATCH:
      console.log(`ActionType.MOVIE_TO_WATCH`);
      return extend(state, {
        playableMovie: action.payload
      });
    case ActionType.INCREASE_COUNT_DISPLAYED_FILMS:
      console.log(`ActionType.INCREASE_COUNT_DISPLAYED_FILMS`);
      return extend(state, {
        countDisplayedFilms: state.countDisplayedFilms + DISPLAYED_NUMBER_OF_FILMS
      });
  }

  console.log(state);
  return state;
};

export {reducer, ActionType, ActionCreator};
