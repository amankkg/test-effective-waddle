// @flow
import * as React from 'react'
import styled from 'styled-components'

type Props = {
  title: string,
  image: string,
  price: string,
  balance: number,
  active: boolean,
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
  border: ${props => (props.active ? '5px solid orange' : 'none')};
  transform: ${props => (props.active ? 'scale(1.1)' : 'none')};

  & > * {
    opacity: ${props => (props.outOfStock ? '0.33' : '1')};
    text-decoration: ${props => (props.outOfStock ? 'strikethrough' : 'none')};
  }
`

function ItemStocks({title, image, price, balance, active, ...rest}: Props) {
  const outOfStock = balance === 0

  return (
    <Root active={active} outOfStock={outOfStock} {...rest}>
      <Image src={image} alt={title} />
      <p>
        {title} ({balance} pcs)
      </p>
    </Root>
  )
}

export {ItemStocks}
