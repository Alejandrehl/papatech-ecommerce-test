import { v4 as uuidv4 } from 'uuid'

import { AppDispatch } from '../../store'
import api from '../../utils/api'
import { Product } from '../reducers/product.reducer'

import { GET_PRODUCTS, SET_ERROR, SET_LOADING } from './types'

export const getProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: SET_LOADING })

    const res = await api.get('')

    const products = res.data.amiibo

    const payload: Product[] = products.map((product: Product) => {
      const min = Math.ceil(12990)
      const max = Math.floor(59990)

      // eslint-disable-next-line security-node/detect-insecure-randomness
      const price = Math.floor(Math.random() * (max - min + 1) + min)

      return {
        ...product,
        price,
        id: uuidv4(),
      }
    })

    dispatch({ type: GET_PRODUCTS, payload })
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message })
  }
}
