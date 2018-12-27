import { Animated, Platform } from 'react-native'
import { Style, StyleInterpolation } from './styled'

export function elevation(level: number | Animated.Animated): Style {
  if (Platform.OS === 'android') {
    return {
      elevation: use(level),
    }
  } else {
    return {
      shadowOpacity: use(add(multiply(0.0015, level), 0.18)),
      shadowRadius: use(multiply(0.54, level)),
      shadowOffset: {
        width: 0,
        height: use(multiply(0.6, level)),
      },
    }
  }
}

function use(a: Animated.Animated | number): number {
  return a as any
}

function coerce(a: Animated.Animated | number) {
  return typeof a === 'number' ? new Animated.Value(a) : a
}

function add(a: Animated.Animated | number, b: Animated.Animated | number) {
  return Animated.add(coerce(a), coerce(b))
}

function multiply(
  a: Animated.Animated | number,
  b: Animated.Animated | number,
) {
  return Animated.multiply(coerce(a), coerce(b))
}

export function elevated(props: {
  defaultLevel: number
}): StyleInterpolation<{ elevation?: number }> {
  return ({ elevation: level }) =>
    elevation(typeof level === 'undefined' ? props.defaultLevel : level)
}
