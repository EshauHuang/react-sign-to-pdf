export const selectSignatures = (state, id) => {
  if (id) {
    return state.signature.signatures.find((signature) => signature.id === id);
  }
  return state.signature.signatures;
};

export const selectSignaturesIsLoading = (state) =>
  state.signature.selectSignaturesIsLoading;
