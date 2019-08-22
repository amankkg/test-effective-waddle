// @flow
import * as React from 'react'
import styled from 'styled-components'

import type {State} from '../core/constants'
import {checkStatus} from '../core/selectors'
import {GoodsGrid} from './goods-grid'
import {CashBox} from './cash-box'

type Props = State & {
  payIn: number => void,
  choose: string => void,
  purchase: () => void,
}

// +-------------------+
// |      header       | 60px
// +-------------------+
// +-auto--+ +-250px---+
// |       | | picker  | auto
// |       | +---------+
// |       | +-250px---+
// | goods | | cashbox | auto
// |       | +---------+
// |       | +-250px---+
// |       | | summary |
// +-------+ +---------+
// +-------------------+
// |      takeout      | 120px
// +-------------------+
const Grid = styled.div`
  display: grid;
  align-content: space-between;
  grid-template: 'h h ' 60px 'g p ' 1fr 'g c' 1fr 'g s' 1fr 't t' 120px / 1fr 250px;
  background: #272822;
  color: #ececec;
  padding: 15px;
  border-radius: 10px;
`

const HeaderArea = styled.div`
  grid-area: h;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(to right, #ff8a00 0%, #da1b60 100%);
  color: navajowhite;
  text-transform: uppercase;
  margin: 0 0 10px;
`

const GoodsArea = styled(GoodsGrid)`
  grid-area: g;
  border: 2px dashed purple;
  padding: 5px;
  margin: 10px;
`

const CashBoxArea = styled(CashBox)`
  grid-area: c;
  border: 2px dashed orange;
  margin: 5px;
  padding: 5px;
`

const SummaryArea = styled.div`
  grid-area: s;
  border: 2px dashed white;
  margin: 5px;
  padding: 5px;
`

const P = styled.div`
  grid-area: p;
  background: pink;
  padding: 5px;
  margin: 10px;
  border: 3px solid green;
  color: black;
`

const T = styled.div`
  grid-area: t;
  background: aliceblue;
  padding: 5px;
  margin: 10px;
  border: 3px solid lime;
  color: black;
`

function Machine(props: Props) {
  const {
    products,
    stocks,
    funds,
    quantity,
    chosenProduct,
    payIn,
    choose,
    purchase,
    ...rest
  } = props
  // TODO: connect SummaryArea to state storage directly
  const status = checkStatus({
    products,
    stocks,
    funds,
    chosenProduct,
    quantity,
  })

  return (
    <Grid {...rest}>
      <HeaderArea>
        <h1>vending machine</h1>
      </HeaderArea>
      <GoodsArea
        items={products}
        stocks={stocks}
        chosen={chosenProduct}
        choose={choose}
      />
      <P>todo: GOODS PICKER</P>
      <CashBoxArea unit="$" subUnit="c" balance={funds} payIn={payIn} />
      <SummaryArea>status: {status}</SummaryArea>
      <T>todo: GOODS TAKEOUT</T>
    </Grid>
  )
}

export {Machine}
