import { px, UnitParam } from './unit'

export function calc(...terms: UnitParam[]) {
  return `calc(${terms.map(px).join(' ')})`
}
