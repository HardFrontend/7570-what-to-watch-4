import {extend} from "./../../utils.js";
import {ActionCreator as AppStateActionCreator} from "./../app-state/app-state.js";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  avatar: null,
};


const ActionTypes = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  ADD_AVATAR: `ADD_AVATAR`,
};

const ActionCreator = {
  requiredAuthorization: (status)=>({
    type: ActionTypes.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  addAvatar: (url)=>({
    type: ActionTypes.ADD_AVATAR,
    payload: url
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload
      });
    case ActionTypes.ADD_AVATAR:
      return extend(state, {
        avatar: action.payload
      });
  }
  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(()=>{
        dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err)=>{
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password
    })
      .then((response)=>{
        const {avatar_url: avatarUrl} = response.data;

        dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.addAvatar(avatarUrl));
        dispatch(AppStateActionCreator.logIn(false));
      })
      .catch((err)=>{
        throw err;
      });
  }
};

export {ActionCreator, reducer, Operation, AuthorizationStatus, ActionTypes};
