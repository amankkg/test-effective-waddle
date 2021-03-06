// @flow

export type Product = {
  id: string,
  title: string,
  imageUrl: string,
  price: number,
}

export type Stocks = {
  [string]: number,
}

export type ProductMap = {
  [string]: Product,
}

export type State = {
  funds: number, // >= 0
  chosenProduct: string | null, // null or key value in products map
  quantity: number, // 1 >= chosenQuantity <= stocks value
  products: ProductMap,
  stocks: Stocks, // map keys should be in products and map values >= 0
}

// TODO: spread State type?
export type StateReady = {
  ...$Exact<State>,
  chosenProduct: string,
}

export const status = {
  IDLE: 'IDLE',
  NO_PRODUCT: 'NO_PRODUCT',
  NO_STOCKS: 'NO_STOCKS',
  NO_FUNDS: 'NO_FUNDS',
  READY: 'READY',
}

export const initial: State = {
  funds: 0,
  chosenProduct: null,
  quantity: 1,
  products: {},
  stocks: {},
}
