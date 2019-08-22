// @flow
import * as React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import {Machine} from '../components/machine'
import {initial} from '../core/constants'
import * as reducer from '../core/reducers'

const StyledMachine = styled(Machine)`
  width: 1000px;
  height: 800px;
`

const imageUrl = 'https://picsum.photos/200/200'

const initialState = {
  ...initial,
  products: {
    '1': {
      id: '1',
      title: 'biscuits',
      imageUrl: '/static/biscuit.jpg',
      price: 110,
    },
    '2': {id: '2', title: 'cakes', imageUrl: '/static/cake.jpg', price: 225},
    '3': {id: '3', title: 'candies', imageUrl: '/static/candy.jpg', price: 160},
    '4': {
      id: '4',
      title: 'cookies',
      imageUrl: '/static/cookie.jpg',
      price: 300,
    },
    '5': {
      id: '5',
      title: 'popcorn',
      imageUrl: '/static/popcorn.jpg',
      price: 75,
    },
    '6': {id: '6', title: 'rolls', imageUrl: '/static/roll.jpg', price: 420},
  },
  stocks: {'1': 5, '2': 0, '3': 3, '4': 8, '5': 10, '6': 14},
}

// TODO: instead of bloating this component with allmighty state object
//  and excess reducer calculations do one of the followings:
//    - split state object to multiple useState/useReducer statements
//    - or use external state manager (e.g. effector)
export default () => {
  const [state, setState] = React.useState(initialState)
  const payIn = amount => setState(reducer.payIn(state, amount))
  const chooseProduct = productId => setState(reducer.choose(state, productId))
  const purchaseProduct = () => setState(reducer.purchase(state))

  return (
    <>
      <Head>
        <title>test app</title>
      </Head>
      <StyledMachine
        products={state.products}
        stocks={state.stocks}
        funds={state.funds}
        payIn={payIn}
        purchase={purchaseProduct}
      />
    </>
  )
}
