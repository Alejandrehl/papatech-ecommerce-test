import { SET_LOADING } from '../actions/types'

type InitialStateType = {
  loading: boolean
}

const initialState: InitialStateType = {
  loading: false,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
