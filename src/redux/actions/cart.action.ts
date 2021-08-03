import { AppDispatch } from '../../store'
import { CartProduct } from '../reducers/cart.reducer'
import { Product } from '../reducers/product.reducer'

import { ADD_PRODUCT_TO_CART, CLOSE_MINI_CART, SHOW_MINI_CART } from './types'

export const addProductToCart =
  (product: Product, cartProducts: CartProduct[]) =>
  (dispatch: AppDispatch) => {
    console.log('ADD PRODUCT TO CART', product)
    console.log('CURRENT PRODUCTS IN CART', cartProducts)

    dispatch({ type: ADD_PRODUCT_TO_CART, payload: null })
  }

export const showMiniCart = () => (dispatch: AppDispatch) =>
  dispatch({ type: SHOW_MINI_CART })

export const closeMiniCart = () => (dispatch: AppDispatch) =>
  dispatch({ type: CLOSE_MINI_CART })
