export const isResource = initialState => ({
  ...initialState,
  $isLoading: false,
  $didLoad: false,
  $didFailLoading: false,
  error: null,
});

export const startLoading = state => state.setIn(['$isLoading'], true);

export const stopLoading = state =>
  state.merge({ $isLoading: false, $didLoad: true, $didFailLoading: false, error: null });

export const failLoading = (state, { error }) =>
  state.merge({
    $isLoading: false,
    $didLoad: false,
    $didFailLoading: true,
    error,
  });

export const isLoading = path => state => state.getIn(path.concat('$isLoading')) === true;

export const resourceReducer = {
  PENDING: startLoading,
  REJECTED: failLoading,
  FULFILLED: stopLoading,
};
