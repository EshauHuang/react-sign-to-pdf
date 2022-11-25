import { createAction } from "../../utils/reducer";
import { DOC_SIGNATURES_ACTION_TYPES } from "./types";

const addSignatureItem = (docSignatures, dropTo, signatureItem) => {
  const newDocSignatures = docSignatures.map((signature) => {
    if (signature.id === dropTo) {
      return {
        ...signature,
        items: [...signature.items, signatureItem]
      };
    }
    return signature;
  });

  return newDocSignatures;
};

export const addSignatureToDoc = (docSignatures, dropTo, signatureItem) => {
  const newDocSignatures = addSignatureItem(
    docSignatures,
    dropTo,
    signatureItem
  );

  return createAction(
    DOC_SIGNATURES_ACTION_TYPES.SET_DOC_SIGNATURE,
    newDocSignatures
  );
};

export const waitSignatureSave = () =>
  createAction(DOC_SIGNATURES_ACTION_TYPES.SET_SIGNATURE_IS_SAVED, false);
