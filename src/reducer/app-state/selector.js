import NameSpace from "./../name-space.js";

const getCountDisplayedFilms = (state) => {
  return state[NameSpace.APP_STATE].countDisplayedFilms;
};


const getPlayableMovie = (state) => {
  return state[NameSpace.APP_STATE].playableMovie;
};

export {getCountDisplayedFilms, getPlayableMovie};
