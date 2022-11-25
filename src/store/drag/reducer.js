import { DRAG_ACTION_TYPES } from "./types";

const INITIAL_STATE = {
  isDragging: false,
  isDropping: false,
  current: {
    itemId: "",
    parentId: "",
    x: "",
    y: "",
    width: "",
    height: "",
    mouseOffsetX: "",
    mouseOffsetY: "",
    dropTo: ""
  }
};

export const dragReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case DRAG_ACTION_TYPES.DRAG_START:
      return {
        ...state,
        isDragging: true,
        current: {
          ...state.current,
          ...payload
        }
      };

    case DRAG_ACTION_TYPES.DRAG_END:
      return {
        ...state,
        isDragging: false,
        isDropping: false,
        current: INITIAL_STATE.current
      };

    case DRAG_ACTION_TYPES.DROP:
      return {
        ...state,
        isDropping: true,
        current: {
          ...state.current,
          ...payload
        }
      };

    default:
      return state;
  }
};
