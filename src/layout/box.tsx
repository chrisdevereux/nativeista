import { StyleProp, View, ViewProps, ViewStyle } from 'react-native'
import { styled, themed } from '../util'
import { getSize } from './sizing'

export interface BoxProps extends ViewStyle, ViewProps {
  padding?: number
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

export const Box = styled(View)(
  themed<BoxProps>(({ theme, padding, style, children, ...props }) => ({
    flexShrink: 0,
    position: 'relative',
    borderColor: theme.color.divider.standard,
    padding: getSize(padding),
    ...props,
  })),
)
