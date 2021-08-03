import { AppDispatch } from '../../store'
import { CartProduct } from '../reducers/cart.reducer'
import { Product } from '../reducers/product.reducer'

import {
  ADD_PRODUCT_TO_CART,
  CLOSE_MINI_CART,
  REMOVE_PRODUCT_FROM_CART,
  SHOW_MINI_CART,
} from './types'

export const addProductToCart =
  (product: Product) => (dispatch: AppDispatch) => {
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: product })
  }

export const removeProductFromCart =
  (cartProduct: CartProduct) => (dispatch: AppDispatch) => {
    dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: cartProduct })
  }

export const showMiniCart = () => (dispatch: AppDispatch) =>
  dispatch({ type: SHOW_MINI_CART })

export const closeMiniCart = () => (dispatch: AppDispatch) =>
  dispatch({ type: CLOSE_MINI_CART })
