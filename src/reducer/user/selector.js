import NameSpace from "./../name-space.js";
import {createSelector} from "reselect";

const getAuthorizationStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

export {getAuthorizationStatus};
