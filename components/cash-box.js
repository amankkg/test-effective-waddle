// @flow

import * as React from 'react'
import styled from 'styled-components'

import {getDisplayValue} from '../core/money'

type Props = {
  unit: string,
  subUnit: string,
  balance: number,
  payIn: number => void,
}

const Root = styled.div`
  width: 250px;
  height: 125px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
`

const Hr = styled.hr`
  width: 100%;
  border-color: orange;
`

const FundButton = styled.button`
  width: 50px;
  height: 25px;
  margin: 0 3px;
`

const Balance = styled.p`
  font-size: large;
`

const CashBox = ({unit, subUnit, balance, payIn, ...rest}: Props) => {
  const addSubUnit = amount => () => payIn(amount)
  const addUnit = amount => () => payIn(amount * 100)

  const prettyBalance = React.useMemo(() => {
    const value = getDisplayValue(balance)

    return `${unit}${value.unit}.${value.subUnit}`
  }, [balance])

  return (
    <Root {...rest}>
      <FundButton onClick={addSubUnit(1)}>{subUnit}1</FundButton>
      <FundButton onClick={addSubUnit(5)}>{subUnit}5</FundButton>
      <FundButton onClick={addSubUnit(20)}>{subUnit}20</FundButton>
      <FundButton onClick={addSubUnit(50)}>{subUnit}50</FundButton>
      <Hr />
      <FundButton onClick={addUnit(1)}>{unit}1</FundButton>
      <FundButton onClick={addUnit(5)}>{unit}5</FundButton>
      <Hr />
      <Balance>{prettyBalance}</Balance>
    </Root>
  )
}

export {CashBox}
