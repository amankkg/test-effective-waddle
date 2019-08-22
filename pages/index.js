// @flow
import * as React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import {Machine} from '../components/machine'

const StyledMachine = styled(Machine)`
  width: 600px;
  height: 1000px;
`

const imageUrl = 'https://picsum.photos/200/200'

const productMap = {
  '1': {id: '1', title: 'snack #1', imageUrl, price: 123},
  '2': {id: '2', title: 'snack #2', imageUrl, price: 258},
  '3': {id: '3', title: 'snack #3', imageUrl, price: 200},
  '4': {id: '4', title: 'snack #4', imageUrl, price: 300},
  '5': {id: '5', title: 'snack #5', imageUrl, price: 75},
  '6': {id: '6', title: 'snack #6', imageUrl, price: 420},
}

const stocks = {'1': 5, '2': 0, '3': 3, '4': 8, '5': 10, '6': 14}

export default () => (
  <>
    <Head>
      <title>test app</title>
    </Head>
    <StyledMachine products={productMap} stocks={stocks} />
  </>
)
