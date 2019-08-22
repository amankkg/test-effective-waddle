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
  width: 150px;
  height: 150px;
  border-radius: 15px;
  margin-top: 15px;
  transform: perspective(17em) rotateX(15deg) rotate(-6deg);
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  height: 220px;
  margin: 10px 5px;
  background: #2f3029;
  border-radius: 40px;

  & > * {
    opacity: ${props => (props.outOfStock ? '0.33' : '1')};
    text-decoration: ${props => (props.outOfStock ? 'strikethrough' : 'none')};
  }
`

function ItemStocks({title, image, balance, ...rest}: Props) {
  const outOfStock = balance === 0

  return (
    <Root outOfStock={outOfStock} {...rest}>
      <Image src={image} alt={title} />
      <p>{title}</p>
    </Root>
  )
}

export {ItemStocks}
