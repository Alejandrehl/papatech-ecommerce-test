import {
  ADD_PRODUCT_TO_CART,
  CLOSE_MINI_CART,
  SET_LOADING,
  SHOW_MINI_CART,
} from '../actions/types'

import { Product } from './product.reducer'

export type CartProduct = {
  readonly product: Product
  quantity: number
}

type InitialStateType = {
  loading: boolean
  products: CartProduct[]
  badgeCount: number
  miniCartVisible: boolean
}

const initialState: InitialStateType = {
  loading: false,
  products: [],
  badgeCount: 0,
  miniCartVisible: false,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        products: state.products.map((cartProduct: CartProduct) => {
          if (cartProduct.product.id === action.payload.id) {
            cartProduct.quantity += 1

            return cartProduct
          }

          const newProductToAdd: CartProduct = {
            product: action.payload,
            quantity: 1,
          }

          return newProductToAdd
        }),
        badgeCount: state.badgeCount + 1,
      }
    case SHOW_MINI_CART:
      return {
        ...state,
        miniCartVisible: true,
      }
    case CLOSE_MINI_CART:
      return {
        ...state,
        miniCartVisible: false,
      }
    default:
      return state
  }
}
