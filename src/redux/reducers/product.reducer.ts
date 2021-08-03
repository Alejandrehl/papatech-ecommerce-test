import { GET_PRODUCTS, SET_LOADING } from '../actions/types'

export type Product = {
  name: string
}

type InitialStateType = {
  loading: boolean
  products: Product[] | null
}

const initialState: InitialStateType = {
  loading: false,
  products: null,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case GET_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      }
    default:
      return state
  }
}
