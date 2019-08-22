// @flow
import * as React from 'react'
import styled from 'styled-components'

import {GoodsGrid} from './goods-grid'
// import {GoodsPicker} from './goods-picker'
import {CashBox} from './cash-box'
// import {Takeout} from './takeout'

type Props = {
  products: {},
  stocks: {},
  funds: number,
  payIn: () => void,
}

// TODO: machine grid layout
// ***************
// *     H H     *  where
// * G G G G P P *    G - goods grid
// * G G G G P P *    P - goods picker
// * G G G G P P *    C - cash box
// * G G G G     *    T - goods takeout
// * G G G G C C *
// * G G G G C C *
// *   T T       *
// *   T T       *
// ***************
const BoxContainer = styled.div`
  background: #272822;
  color: #ececec;
`

const H = styled.h1`
  text-align: center;
  background: linear-gradient(to right, #ff8a00 0%, #da1b60 100%);
  color: navajowhite;
  text-transform: uppercase;
  padding: 10px 0;
`
// const G = styled(GoodsGrid)
// const P = styled(GoodsPicker)
// const T = styled(Takeout)

function Machine({products, stocks, funds, payIn, ...rest}: Props) {
  return (
    <BoxContainer {...rest}>
      <H>vending machine</H>
      <GoodsGrid items={products} stocks={stocks} />
      {/* <P /> */}
      <CashBox unit="$" subUnit="c" balance={funds} payIn={payIn} />
      {/* <T /> */}
    </BoxContainer>
  )
}

export {Machine}
