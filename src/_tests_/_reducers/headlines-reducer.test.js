import headlinesReducer from '../../reducers/headlines-reducer';

describe('headlinesReducer', () => {
  const defaultState = {
    isLoading: false,
    headlines: [],
    error: null
  };

  test('should sxs return default state if no action is passed', () => {
    expect(headlinesReducer(defaultState, {type: null})).toEqual(
      {
        isLoading: false,
        headlines: [],
        error: null
      }
    );
  });
});