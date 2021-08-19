import {
  GET_CITIES_REQUEST,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAIL,
  GET_COUNTRIES_FAIL,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_REQUEST,
  GET_DIRECTIONS_REQUEST,
  GET_DIRECTIONS_SUCCESS,
  GET_DIRECTIONS_FAIL,
  GET_ESTATE_TYPES_FAIL,
  GET_ESTATE_TYPES_SUCCESS,
  GET_ESTATE_TYPES_REQUEST,
  GET_PROPERTY_TYPES_FAIL,
  GET_PROPERTY_TYPES_SUCCESS,
  GET_PROPERTY_TYPES_REQUEST,
} from "./actionTypes"

const initialState = {
  isLoading: false,
  loaded: false,
  cities: [],
  countries: [],
  directions: [],
  estateTypes: [],
  propertyTypes: [],
  error: null,
}

const locations = (state = initialState, action) => {
  switch (action.type) {
    // START CITIES
    case GET_CITIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        loaded: false,
        cities: [],
        error: null,
      }
    case GET_CITIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        cities: action.payload,
        error: null,
      }
    case GET_CITIES_FAIL:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        cities: [],
        error: action.payload,
      }
    // END CITIES
    // START COUNTRIES
    case GET_COUNTRIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        loaded: false,
        countries: [],
        error: null,
      }
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        countries: action.payload,
        error: null,
      }
    case GET_COUNTRIES_FAIL:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        countries: [],
        error: action.payload,
      }
    // END COUNTRIES
    // START DIRECTIONS
    case GET_DIRECTIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
        loaded: false,
        directions: [],
        error: null,
      }
    case GET_DIRECTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        directions: action.payload,
        error: null,
      }
    case GET_DIRECTIONS_FAIL:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        directions: [],
        error: action.payload,
      }
    // END DIRECTIONS
    // START ESTATE_TYPES
    case GET_ESTATE_TYPES_REQUEST:
      return {
        ...state,
        isLoading: true,
        loaded: false,
        estateTypes: [],
        error: null,
      }
    case GET_ESTATE_TYPES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        estateTypes: action.payload,
        error: null,
      }
    case GET_ESTATE_TYPES_FAIL:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        estateTypes: [],
        error: action.payload,
      }
    // END ESTATE_TYPES

    // START PROPERTY_TYPES
    case GET_PROPERTY_TYPES_REQUEST:
      return {
        ...state,
        isLoading: true,
        loaded: false,
        propertyTypes: [],
        error: null,
      }
    case GET_PROPERTY_TYPES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        propertyTypes: action.payload,
        error: null,
      }
    case GET_PROPERTY_TYPES_FAIL:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        propertyTypes: [],
        error: action.payload,
      }
    // END PROPERTY_TYPES
    default:
      return state
  }
}

export default locations
