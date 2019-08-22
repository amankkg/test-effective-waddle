// @flow
import * as React from 'react'
import styled from 'styled-components'

import type {ProductMap, Stocks} from '../core/constants'
import {ItemStocks} from './item-stocks'

type Props = {
  items: ProductMap,
  stocks: Stocks,
}

const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

const StyledItemStocks = styled(ItemStocks)`
  cursor: pointer;
`

// TODO: item click should choose product OR do it outside only?
function GoodsGrid({items, stocks, ...rest}: Props) {
  return (
    <Grid {...rest}>
      {Object.values(items).map(p => (
        <StyledItemStocks
          key={p.id}
          title={p.title}
          image={p.imageUrl}
          balance={stocks[p.id]}
        />
      ))}
    </Grid>
  )
}

export {GoodsGrid}
