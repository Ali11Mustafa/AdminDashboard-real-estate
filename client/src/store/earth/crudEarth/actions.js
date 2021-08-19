import {
  CREATE_EARTH_FAIL,
  CREATE_EARTH_REQUEST,
  CREATE_EARTH_SUCCESS,
} from "./actionTypes"

import * as api from "../../api/index.js"

export const createEstate = estate => async dispatch => {
  dispatch({ type: CREATE_EARTH_REQUEST })
  try {
    const { data } = await api.createEstate(estate)

    dispatch({ type: CREATE_EARTH_SUCCESS, payload: data })
  } catch (error) {
    // console.log(error.message)
    dispatch({ type: CREATE_EARTH_FAIL, payload: error.message })
  }
}
