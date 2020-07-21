import {extend} from "../../utils";
import {adapterForArray, adapter} from "../../adapters/films.js";


const initialState = {
  films: [],
  promoFilm: {},
  genreForFilter: `All genres`,
  isCommentPublishing: false,
  isCommentSendingError: false,
};


const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  SET_GENRE_FOR_FILTER: `SET_GENRE_FOR_FILTER`,
  CHANGE_FLAG_COMMENT_PUBLISHING: `CHANGE_FLAG_COMMENT_PUBLISHING`,
  CHANGE_FLAG_COMMENT_SENDING_ERROR: `CHANGE_FLAG_COMMENT_SENDING_ERROR`,
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
  },

  loadComments: (filmId, commentData)=>(dispatch, getState, api)=> {
    return api.get(`comments/${filmId}`, {
      rating: commentData.rating,
      comment: commentData.comment
    });
  },

  commentPost: (filmId, commentData)=>(dispatch, getState, api)=> {
    return api.post(`comments/${filmId}`, {
      rating: commentData.rating,
      comment: commentData.comment
    })
      .then(()=>{
        dispatch(ActionCreator.changeFlagCommentPublishing(false));
        dispatch(ActionCreator.changeFlagCommentSendingError(false));
      })
      .catch(()=>{
        dispatch(ActionCreator.changeFlagCommentPublishing(false));
        dispatch(ActionCreator.changeFlagCommentSendingError(true));
      });
  },

  changeFlagCommentPublishing: (status)=>({
    type: ActionType.CHANGE_FLAG_COMMENT_PUBLISHING,
    payload: status
  }),

  changeFlagCommentSendingError: (status)=>({
    type: ActionType.CHANGE_FLAG_COMMENT_SENDING_ERROR,
    payload: status
  })
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
    case ActionType.CHANGE_FLAG_COMMENT_PUBLISHING:
      console.log(`CHANGE_FLAG_COMMENT_PUBLISHING`)
      return extend(state, {
        isCommentPublishing: action.payload
      });
    case ActionType.CHANGE_FLAG_COMMENT_SENDING_ERROR:
      return extend(state, {
        isCommentSendingError: action.payload
      });
  }

  console.log(state);
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
