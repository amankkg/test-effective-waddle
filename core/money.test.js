import {getMonetaryValue, getDisplayValue, addUnit, addSubUnit} from './money'

describe('getMonetaryValue', () => {
  it('should return 258 for $2.58', () => {
    const actual = getMonetaryValue({unit: 2, subUnit: 58})

    expect(actual).toBe(258)
  })

  it('should floor values', () => {
    const actual = getMonetaryValue({unit: 2.5, subUnit: 58.9})

    expect(actual).toBe(258)
  })
})

describe('getDisplayValue', () => {
  it('should return $2.58 for 258', () => {
    const actual = getDisplayValue(258)
    const expected = {unit: 2, subUnit: 58}

    expect(actual).toEqual(expected)
  })

  it('should floor values', () => {
    const actual = getDisplayValue(258.5)
    const expected = {unit: 2, subUnit: 58}

    expect(actual).toEqual(expected)
  })
})

describe('addUnit', () => {
  it('should return 258 for $1.58 + $1', () => {
    const actual = addUnit(158, 1)

    expect(actual).toBe(258)
  })

  it('should floor values', () => {
    const actual = addUnit(158.6, 1.5)

    expect(actual).toBe(258)
  })
})

describe('addSubUnit', () => {
  it('should return 258 for $2.08 + 50c', () => {
    const actual = addSubUnit(208, 50)

    expect(actual).toBe(258)
  })

  it('should floor values', () => {
    const actual = addSubUnit(208.6, 50.66)

    expect(actual).toBe(258)
  })
})
