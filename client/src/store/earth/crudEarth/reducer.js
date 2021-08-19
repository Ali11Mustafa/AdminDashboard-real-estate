import {
  CREATE_EARTH_FAIL,
  CREATE_EARTH_REQUEST,
  CREATE_EARTH_SUCCESS,
} from "./actionTypes"

const initialState = {
  isLoading: false,
  loaded: false,
  data: null,
  error: null,
}

const earth = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EARTH_REQUEST:
      return {
        ...state,
        isLoading: true,
        loaded: false,
        data: null,
        error: null,
      }
    case CREATE_EARTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        data: action.payload,
        error: null,
      }
    case CREATE_EARTH_FAIL:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        data: null,
        error: action.payload,
      }
    default:
      return state
  }
}

export default earth
