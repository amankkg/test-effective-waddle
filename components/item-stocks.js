// @flow
import * as React from 'react'
import styled from 'styled-components'

type Props = {
  title: string,
  image: string,
  balance: number,
}

// TODO: effect of multiple items
const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  margin-top: 15px;
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  height: 270px;
  background: #2f3029;
  border-radius: 50px;

  & > * {
    opacity: ${props => (props.emptied ? '0.5' : '1')};
  }
`

function ItemStocks({title, image, balance}: Props) {
  const emptied = balance === 0

  return (
    <Root emptied={emptied}>
      <Image src={image} alt={title} />
      <p>{title}</p>
    </Root>
  )
}

export {ItemStocks}
