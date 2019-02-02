import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import React from 'react'
import { TextStyle } from 'react-native'
import { getSize } from '../layout/sizing'
import { Style, StyleInterpolation } from './styled'

export interface Theme {
  color: {
    control: {
      standard: string
    }
    divider: {
      standard: string
    }
  }
  text: {
    heading: TextTheme
    subheading: TextTheme
    paragraph: TextTheme
    caption: TextTheme
  }
}

export interface TextTheme extends TextStyle {
  size?: number
}

export const defaultTheme: Theme = {
  color: {
    control: {
      standard: 'hotpink',
    },
    divider: {
      standard: 'lightgrey',
    },
  },
  text: {
    heading: {
      fontSize: getSize(4),
      fontWeight: '600',
    },
    subheading: {
      fontSize: getSize(3),
      fontWeight: '600',
    },
    paragraph: {
      fontSize: getSize(3),
      fontWeight: '400',
    },
    caption: {
      fontSize: getSize(2),
    },
  },
}

export function themed<Props>(
  fn: (props: Props & { theme: Theme }) => Style,
): StyleInterpolation<Props> {
  return fn as any
}

export function styleOption<Props>(
  key: keyof Props,
  config: {
    options: Record<string, StyleInterpolation<Props>>
    default: string
  },
): StyleInterpolation<Props> {
  return (props: Props) => {
    const optionKey = props[key] || (config.default as any)
    const option = config.options[optionKey]

    if (typeof option === 'function') {
      return option(props)
    }

    return option
  }
}

export function ThemeProvider(props: {
  theme: Theme
  children?: React.ReactNode
}) {
  return <EmotionThemeProvider {...props} />
}
