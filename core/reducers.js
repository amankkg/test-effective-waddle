// @flow
import type {State, Product} from './constants'

// TODO: use lenses to simplify immmutable updates

export const addProduct = (state: State, product: Product) => ({
  ...state,
  products: {...state.products, [product.id]: product},
  stocks: {...state.stocks, [product.id]: 0},
})

export const removeProduct = (state: State, productId: Product.id) => ({
  // TODO: remove entries entirely instead of setting undefined value
  ...state,
  products: {...state.products, [productId]: undefined},
  stocks: {...state.stocks, [productId]: undefined},
})

export const repelnishStocks = (
  state: State,
  productId: Product.id,
  quantity: number,
) => ({
  ...state,
  stocks: {...state.stocks, [productId]: state.stocks[productId] + quantity},
})

export const setQuantity = (state: State, value: number) => ({
  ...state,
  quantity: state.quantity + value,
})

export const payIn = (state: State, amount: number) => ({
  ...state,
  funds: state.funds + amount,
})

export const choose = (state: State, productId: Product.id) => ({
  ...state,
  choosenProduct: productId,
})

export const purchase = (state: State) => {
  const product = state.products[state.choosenProduct]
  const productStocks = stocks[product.id]

  return {
    ...state,
    funds: state.funds - state.quantity * product.price,
    choosenProduct: null,
    stocks: {...state.stocks, [product.id]: productStocks - state.quantity},
  }
}
