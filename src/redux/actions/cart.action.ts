import { AppDispatch } from '../../store'
import { Product } from '../reducers/product.reducer'

import { ADD_PRODUCT_TO_CART } from './types'

export const addProductToCart =
  (product: Product) => (dispatch: AppDispatch) => {
    console.log('ADD PRODUCT TO CART', product)
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: null })
  }
