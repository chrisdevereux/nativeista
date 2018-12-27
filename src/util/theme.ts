import { Style, StyleInterpolation } from './styled'

export interface Theme {
  color: {
    control: {
      standard: string
    }
  }
}

export const defaultTheme: Theme = {
  color: {
    control: {
      standard: 'hotpink',
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
