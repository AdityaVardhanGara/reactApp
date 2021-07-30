import {
  CREATE_TUTORIAL,
  RETRIEVE_TUTORIALS,
  UPDATE_TUTORIAL,
  DELETE_TUTORIAL,
  DELETE_ALL_TUTORIALS,
} from "../actions/types";

const initialState = [];

function tutorialReducer(companys = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TUTORIAL:
      return [...companys, payload];

    case RETRIEVE_TUTORIALS:
      return payload;

    case UPDATE_TUTORIAL:
      return companys.map((company) => {
        if (company.id === payload.id) {
          return {
            ...company,
            ...payload,
          };
        } else {
          return company;
        }
      });

    case DELETE_TUTORIAL:
      return companys.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_TUTORIALS:
      return [];

    default:
      return companys;
  }
};

export default tutorialReducer;