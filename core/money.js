// @flow

type DisplayValue = {
  // e.g. $2.5 = $2.00 and 50c
  unit: number,
  subUnit: number,
}

export const getMonetaryValue = (value: DisplayValue) =>
  Math.floor(value.unit) * 100 + Math.floor(value.subUnit)

export const getDisplayValue = (value: number) => {
  const raw = value / 100
  const unit = Math.floor(raw)
  const subUnit = Math.floor(value - unit * 100)

  return {unit, subUnit}
}

export const addUnit = (current: number, added: number) =>
  Math.floor(current) + Math.floor(added) * 100

export const addSubUnit = (current: number, added: number) =>
  Math.floor(current) + Math.floor(added)
