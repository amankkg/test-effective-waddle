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
  items: Item[],
  stocks: {[Item.id]: number},
}

const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

function GoodsGrid({items, stocks, ...rest}: Props) {
  return (
    <Grid {...rest}>
      {items.map(({id, title, imageUrl}) => (
        <ItemStocks
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
