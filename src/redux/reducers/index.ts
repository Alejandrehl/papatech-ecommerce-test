import { combineReducers } from 'redux'

import cartReducer from './cart.reducer'
import productReducer from './product.reducer'

export default combineReducers({
  product: cartReducer,
  cart: productReducer,
})
