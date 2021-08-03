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

    console.log('AQUI', res)

    dispatch({ type: GET_PRODUCTS })
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message })
  }
}
