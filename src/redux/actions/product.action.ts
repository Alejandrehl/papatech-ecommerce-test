import { AppDispatch } from '../../store'
import api from '../../utils/api'

import { GET_PRODUCTS, SET_ERROR, SET_LOADING } from './types'

export const getProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: SET_LOADING })

    const res = await api.get('')

    dispatch({ type: GET_PRODUCTS, payload: res.data.amiibo })
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message })
  }
}
