export const isResource = initialState => ({
  ...initialState,
  $isLoading: false,
  $didLoad: false,
  $didFailLoading: false,
  error: null,
});

export const startLoading = state => state.setIn(['$isLoading'], true);

export const failLoading = (state, { error }) =>
  state.merge({
    $isLoading: false,
    $didLoad: false,
    $didFailLoading: true,
    error,
  });

export const isLoading = path => state => state.getIn(path.concat('$isLoading')) === true;
