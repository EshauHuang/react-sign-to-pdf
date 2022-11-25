import { DOC_SIGNATURES_ACTION_TYPES } from "./types";

const INITIAL_STATE = {
  isLoading: false,
  isSaved: false,
  signatures: [
    {
      id: "drop-box-1",
      items: []
    },
    {
      id: "drop-box-2",
      items: []
    }
  ],
  error: ""
};

export const docSignaturesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case DOC_SIGNATURES_ACTION_TYPES.SET_DOC_SIGNATURE:
      return {
        ...state,
        isSaved: true,
        signatures: payload
      };

    case DOC_SIGNATURES_ACTION_TYPES.SET_SIGNATURE_IS_SAVED:
      return {
        ...state,
        isSaved: false
      };

    default:
      return state;
  }
};
