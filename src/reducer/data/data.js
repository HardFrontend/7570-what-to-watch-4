import {extend} from "../../utils";
import {adapterForArray, adapter} from "../../adapters/films.js";


const initialState = {
  films: [],
  promoFilm: {},
  genreForFilter: `All genres`,
};


const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  SET_GENRE_FOR_FILTER: `SET_GENRE_FOR_FILTER`,
};

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  },
  loadPromo: (promoFilm) => {
    return {
      type: ActionType.LOAD_PROMO,
      payload: promoFilm,
    };
  },
  setGenreForFilter: (genre) => {
    return {
      type: ActionType.SET_GENRE_FOR_FILTER,
      payload: genre,
    };
  },
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const films = adapterForArray(response.data);
        dispatch(ActionCreator.loadFilms(films));
      });
  },
  loadPromo: ()=>(dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response)=>{
        const promoFilm = adapter(response.data);
        dispatch(ActionCreator.loadPromo(promoFilm));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.LOAD_PROMO:
      return extend(state, {
        promoFilm: action.payload,
      });
    case ActionType.SET_GENRE_FOR_FILTER:
      return extend(state, {
        genreForFilter: action.payload,
      });
  }

  console.log(state)
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
