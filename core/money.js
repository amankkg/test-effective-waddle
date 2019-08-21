// @flow

type Unit = number // e.g. euro
type SubUnit = number // e.g. euro cent
type MonetaryValue = number // ultimate value
type DisplayValue = {
  // e.g. $2.5 = $2.00 and 50c
  unit: Unit,
  subUnit: Unit,
}

export const getMonetaryValue = ({unit, subUnit}: DisplayValue) =>
  Math.floor(unit) * 100 + Math.floor(subUnit)

export const getDisplayValue = (value: MonetaryValue) => {
  const raw = value / 100
  const unit = Math.floor(raw)
  const subUnit = Math.floor(value - unit * 100)

  return {unit, subUnit}
}

export const addUnit = (current: MonetaryValue, added: Unit) =>
  Math.floor(current) + Math.floor(added) * 100

export const addSubUnit = (current: MonetaryValue, added: SubUnit) =>
  Math.floor(current) + Math.floor(added)
