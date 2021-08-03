import { AppDispatch } from '../../store'
import api from '../../utils/api'

import { GET_PRODUCTS, SET_ERROR, SET_LOADING } from './types'

export const setLoading = () => {
  return { type: SET_LOADING }
}

export const getProducts = () => async (dispatch: AppDispatch) => {
  try {
    setLoading()

    const res = await api.get('')

    dispatch({ type: GET_PRODUCTS, payload: res.data.amiibo })
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message })
  }
}
