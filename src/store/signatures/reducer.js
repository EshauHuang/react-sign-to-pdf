import { SIGNATURES_ACTION_TYPES } from "./types";

const INITIAL_STATE = {
  isLoading: false,
  signatures: [
    {
      id: "box-1",
      items: [
        {
          title: "aaa",
          isSign: false
        },
        {
          title: "bbb",
          isSign: false
        },
        {
          title: "ccc",
          isSign: false
        }
      ]
    },
    {
      id: "box-2",
      items: [
        {
          title: "AAA",
          isSign: false
        },
        {
          title: "BBB",
          isSign: false
        },
        {
          title: "CCC",
          isSign: false
        }
      ]
    }
  ],
  error: ""
};

export const signaturesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNATURES_ACTION_TYPES.FETCH_SIGNATURES_START:
      return {
        ...state,
        isLoading: true
      };

    case SIGNATURES_ACTION_TYPES.FETCH_SIGNATURES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        signatures: payload
      };

    case SIGNATURES_ACTION_TYPES.FETCH_SIGNATURES_FAILED:
      return {
        ...state,
        error: payload
      };

    case SIGNATURES_ACTION_TYPES.ADD_SIGNATURE:
      return {
        signatures: payload
      };

    default:
      return state;
  }
};
