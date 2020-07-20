import {extend} from "./../../utils.js";

const DISPLAYED_NUMBER_OF_FILMS = 8;

const ServerStatus = {
  ERROR: `ERROR`,
  OK: `OK`
};

const initialState = {
  sortGenre: `All genres`,
  countDisplayedFilms: DISPLAYED_NUMBER_OF_FILMS,
  playableMovie: null,
  logIn: false,
  serverStatus: ServerStatus.OK
};

const ActionType = {
  FILTER_CHANGE: `FILTER_CHANGE`,
  FILMS_FILTER: `FILMS_FILTER`,
  MOVIE_TO_WATCH: `MOVIE_TO_WATCH`,
  INCREASE_COUNT_DISPLAYED_FILMS: `INCREASE_COUNT_DISPLAYED_FILMS`,
  LOG_IN: `LOG_IN`,
  CHANGE_SERVER_STATUS_ON_ERROR: `CHANGE_SERVER_STATUS_ON_ERROR`,

};

const ActionCreator = {
  filterChange: (id) => ({
    type: ActionType.FILTER_CHANGE,
    payload: id
  }),

  movieToWatch: (film) => ({
    type: ActionType.MOVIE_TO_WATCH,
    payload: film
  }),

  increaseCountDisplayedFilms: (amount) => ({
    type: ActionType.INCREASE_COUNT_DISPLAYED_FILMS,
    payload: amount
  }),

  logIn: (status)=>({
    type: ActionType.LOG_IN,
    payload: status
  }),

  changeServerStatusOnError: ()=>({
    type: ActionTypes.CHANGE_SERVER_STATUS_ON_ERROR,
    payload: ServerStatus.ERROR
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_CHANGE:
      if (action.payload === `All genres`) {
        return extend(state, {
          sortGenre: `All genres`,
          films: initialState.films,
          filmsShowTo: 8
        });
      }
      return extend(state, {
        sortGenre: action.payload,
        countDisplayedFilms: DISPLAYED_NUMBER_OF_FILMS
      });
    case ActionType.MOVIE_TO_WATCH:
      return extend(state, {
        playableMovie: action.payload
      });
    case ActionType.INCREASE_COUNT_DISPLAYED_FILMS:
      return extend(state, {
        countDisplayedFilms: state.countDisplayedFilms + DISPLAYED_NUMBER_OF_FILMS
      });
    case ActionType.LOG_IN:
      return extend(state, {
        logIn: action.payload
      });

    case ActionType.CHANGE_SERVER_STATUS_ON_ERROR:
      return extend(state, {
        serverStatus: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
