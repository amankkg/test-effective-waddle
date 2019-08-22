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

const CashBox = ({unit, subUnit, balance, payIn}: Props) => {
  const addSubUnit = amount => () => payIn(amount)
  const addUnit = amount => () => payIn(amount * 100)

  const prettyBalance = React.useMemo(() => {
    const value = getDisplayValue(balance)

    return `${unit}${value.unit} ${subUnit}${value.subUnit}`
  }, [balance])

  return (
    <div>
      <button onClick={addSubUnit(1)}>{subUnit}1</button>
      <button onClick={addSubUnit(5)}>{subUnit}5</button>
      <button onClick={addSubUnit(20)}>{subUnit}20</button>
      <button onClick={addSubUnit(50)}>{subUnit}50</button>
      <hr />
      <button onClick={addUnit(1)}>{unit}1</button>
      <button onClick={addUnit(5)}>{unit}5</button>
      <hr />
      <p>funds: {prettyBalance}</p>
    </div>
  )
}

export {CashBox}
