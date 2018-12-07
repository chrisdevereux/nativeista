// tslint:disable:no-var-requires

import { TextStyle, ViewStyle } from 'react-native'

export type Style = ViewStyle & TextStyle

type CreateStyled = <ComponentProps>(
  component: React.ComponentType<ComponentProps>,
) => Styled<ComponentProps>

type Styled<ComponentProps> = <InterpolationProps>(
  ...interpolations: Array<StyleInterpolation<InterpolationProps>>
) => React.ComponentType<ComponentProps & InterpolationProps>

export type StyleInterpolation<Props> = ((props: Props) => Style) | Style

export const styled: CreateStyled = require('@emotion/native').default
