export const selectDocSignatures = (state, id) => {
  if (id) {
    return state.docSignature.signatures.find(
      (signature) => signature.id === id
    );
  }

  return state.docSignature.signatures;
};

export const selectIsSaved = (state) => state.docSignature.isSaved;
