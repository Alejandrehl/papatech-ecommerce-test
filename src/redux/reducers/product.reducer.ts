import { GET_PRODUCTS, SET_LOADING } from '../actions/types'

export type Release = {
  readonly au: string | null
  readonly eu: string | null
  readonly jp: string | null
  readonly na: string | null
}

export type Product = {
  readonly amiiboSeries: string
  readonly character: string
  readonly gameSeries: string
  readonly head: string
  readonly image: string
  readonly name: string
  readonly release: Release
  readonly tail: string
  readonly type: string
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
