import headlinesReducer from '../../reducers/headlines-reducer';
import * as c from './../../actions/ActionTypes'

describe('headlinesReducer', () => {
  const defaultState = {
    isLoading: false,
    headlines: [],
    error: null
  };

  const loadingState = {
    isLoading: true,
    headlines: [],
    error: null
  }

  test('should sxs return default state if no action is passed', () => {
    expect(headlinesReducer(defaultState, {type: null})).toEqual(
      {
        isLoading: false,
        headlines: [],
        error: null
      }
    );
  });

  test('requesting headlines should change isLoading from false to true', () => {
    const action = { type: c.REQUEST_HEADLINES };

    expect(headlinesReducer(defaultState, action)).toEqual({
      isLoading: true,
      headlines: [],
      error: null
    });
  });

  test('successfully getting headlines should change isLoading to false and update headlines', ()=> {
    const headlines = "A headline";
    const action = {
      type: c.GET_HEADLINES_SUCCESS,
      headlines: headlines
    };

    expect(headlinesReducer(loadingState, action)).toEqual({
      isLoading: false,
      headlines: "A headline",
      error: null
    });
  });
});