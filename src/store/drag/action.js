import { createAction } from "../../utils/reducer";
import { DRAG_ACTION_TYPES } from "./types";

export const dragStart = (itemState) =>
  createAction(DRAG_ACTION_TYPES.DRAG_START, itemState);

export const dragEnd = () => createAction(DRAG_ACTION_TYPES.DRAG_END);

export const drop = (x, y, dropTo) =>
  createAction(DRAG_ACTION_TYPES.DROP, {
    x,
    y,
    dropTo
  });
