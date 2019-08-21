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
const items = [
  {id: '1', title: 'snack #1', imageUrl},
  {id: '2', title: 'snack #2', imageUrl},
]
const stocks = {'1': 5, '2': 0}

export default () => (
  <>
    <Head>
      <title>test app</title>
    </Head>
    <StyledMachine items={items} stocks={stocks} />
  </>
)
