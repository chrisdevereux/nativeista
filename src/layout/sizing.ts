import { memoize } from 'lodash'
import { moderateScale } from 'react-native-size-matters'

const UNIT_SIZE = 6

const getSpacingMultiplier = memoize(
  (level: number): number =>
    level <= 1 ? 1 : 1.5 * getSpacingMultiplier(level - 1),
)

/**
 * Return the nth unit size greater than
 */
export function getSize(level: number): number
export function getSize(level: number | undefined): number | undefined
export function getSize(level?: number) {
  if (typeof level === 'undefined') {
    return level
  }

  return moderateScale(getSpacingMultiplier(level) * UNIT_SIZE)
}

/**
 * Return the first unit size of at least n pixels
 */
export function getSizeToFit(level: number) {
  let i = 0
  for (; getSize(i) < level; ++i) {
    continue
  }

  return getSize(i)
}
