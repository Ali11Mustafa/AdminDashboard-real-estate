import {
  GET_CITIES_FAIL,
  GET_CITIES_REQUEST,
  GET_CITIES_SUCCESS,
  GET_COUNTRIES_FAIL,
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  GET_DIRECTIONS_FAIL,
  GET_DIRECTIONS_REQUEST,
  GET_DIRECTIONS_SUCCESS,
  GET_ESTATE_TYPES_FAIL,
  GET_ESTATE_TYPES_REQUEST,
  GET_ESTATE_TYPES_SUCCESS,
  GET_PROPERTY_TYPES_FAIL,
  GET_PROPERTY_TYPES_REQUEST,
  GET_PROPERTY_TYPES_SUCCESS,
} from "./actionTypes"

import * as api from "../../api/index.js"

export const listCities = () => async dispatch => {
  dispatch({ type: GET_CITIES_REQUEST })
  try {
    const { data } = await api.getAllCities()

    dispatch({ type: GET_CITIES_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_CITIES_FAIL, payload: error.message })
  }
}

export const listCountries = () => async dispatch => {
  dispatch({ type: GET_COUNTRIES_REQUEST })
  try {
    const { data } = await api.getAllCountries()

    dispatch({ type: GET_COUNTRIES_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_COUNTRIES_FAIL, payload: error.message })
  }
}

export const listDirections = () => async dispatch => {
  dispatch({ type: GET_DIRECTIONS_REQUEST })
  try {
    const { data } = await api.getAllDirections()

    dispatch({ type: GET_DIRECTIONS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_DIRECTIONS_FAIL, payload: error.message })
  }
}

export const listEstateTypes = () => async dispatch => {
  dispatch({ type: GET_ESTATE_TYPES_REQUEST })
  try {
    const { data } = await api.getAllEstateTypes()

    dispatch({ type: GET_ESTATE_TYPES_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_ESTATE_TYPES_FAIL, payload: error.message })
  }
}

export const listPropertyTypes = () => async dispatch => {
  dispatch({ type: GET_PROPERTY_TYPES_REQUEST })
  try {
    const { data } = await api.getAllPropertyTypes()

    dispatch({ type: GET_PROPERTY_TYPES_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_PROPERTY_TYPES_FAIL, payload: error.message })
  }
}
