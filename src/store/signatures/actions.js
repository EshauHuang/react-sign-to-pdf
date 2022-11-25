import { createAction } from "../../utils/reducer";
import { SIGNATURES_ACTION_TYPES } from "./types";

export const fetchSinaturesStart = () =>
  createAction(SIGNATURES_ACTION_TYPES.FETCH_SIGNATURES_START);

export const fetchSinaturesSuccess = (sinaturesArray) =>
  createAction(
    SIGNATURES_ACTION_TYPES.FETCH_SIGNATURES_SUCCESS,
    sinaturesArray
  );

export const fetchSinaturesFailed = (error) =>
  createAction(SIGNATURES_ACTION_TYPES.FETCH_SIGNATURES_FAILED, error);

export const addSignature = (sinature) =>
  createAction(SIGNATURES_ACTION_TYPES.ADD_SIGNATURE, sinature);
