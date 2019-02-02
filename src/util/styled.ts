// tslint:disable:no-var-requires

import { ComponentType } from 'react'
import { Animated, TextStyle, ViewStyle } from 'react-native'

export type Style = ViewStyle & TextStyle

type CreateStyled = <ComponentProps>(
  component: React.ComponentType<ComponentProps>,
) => Styled<ComponentProps>

type Styled<ComponentProps> = <InterpolationProps>(
  ...interpolations: Array<StyleInterpolation<InterpolationProps>>
) => React.ComponentType<ComponentProps & InterpolationProps>

export type StyleInterpolation<Props = {}> = ((props: Props) => Style) | Style

const emotionStyled: CreateStyled = require('@emotion/native').default

export function styled<Props>(component: ComponentType<Props>) {
  return <InterpolationProps>(
    ...interpolations: Array<StyleInterpolation<InterpolationProps>>
  ) =>
    Object.assign(emotionStyled(component)(...interpolations), {
      animated: () =>
        emotionStyled(Animated.createAnimatedComponent(component))(
          ...interpolations,
        ),
    })
}

export function adaptInterpolation<Props, T>(
  props: Props,
  inter: StyleInterpolation<Props>,
  fn: (si: Style) => Style,
): Style {
  if (typeof inter === 'function') {
    return fn(inter(props))
  }

  return fn(inter)
}
