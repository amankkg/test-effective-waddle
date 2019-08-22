// @flow
import * as React from 'react'
import styled from 'styled-components'

import {ItemStocks} from './item-stocks'

type Item = {
  id: string,
  title: string,
  imageUrl: string,
}

type Props = {
  items: {[Item.id]: Item},
  stocks: {[Item.id]: number},
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
      {Object.entries(items).map(([id, {title, imageUrl}]) => (
        <StyledItemStocks
          key={id}
          title={title}
          image={imageUrl}
          balance={stocks[id]}
        />
      ))}
    </Grid>
  )
}

export {GoodsGrid}
