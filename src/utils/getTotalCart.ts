import { CartProduct } from '../redux/reducers/cart.reducer'

export default (cartProducts: CartProduct[]) => {
  let total = 0

  cartProducts.forEach((cartProduct: CartProduct) => {
    total += cartProduct.product.price * cartProduct.quantity
  })

  return total
}
