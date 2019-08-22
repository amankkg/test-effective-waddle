// @flow

import type {State} from './constants'
import {status} from './constants'

export const checkStatus = (state: State) => {
  if (state.funds === 0 && state.choosenProduct === null) return status.IDLE
  if (state.choosenProduct === null) return status.NO_PRODUCT

  const product = state.products[state.choosenProduct]

  if (state.stocks[product.id] < state.quantity) return status.NO_STOCKS
  if (state.funds < product.price * state.quantity) return status.NO_FUNDS

  return status.READY
}
