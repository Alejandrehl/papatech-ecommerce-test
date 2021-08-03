import { ADD_PRODUCT_TO_CART, SET_LOADING } from '../actions/types'

import { Product } from './product.reducer'

export type CartProduct = {
  readonly product: Product
  quantity: number
}

type InitialStateType = {
  loading: boolean
  products: CartProduct[]
  badgeCount: number
}

const initialState: InitialStateType = {
  loading: false,
  products: [],
  badgeCount: 0,
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
        products: [...state.products, action.payload],
        badgeCount: state.badgeCount + 1,
      }
    default:
      return state
  }
}
