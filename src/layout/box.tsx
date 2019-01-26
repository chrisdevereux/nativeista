import { StyleProp, View, ViewStyle } from 'react-native'
import { styled, themed } from '../util'
import { getSize } from './sizing'

interface BoxProps extends ViewStyle {
  padding?: number
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

export const Box = styled(View)(
  themed<BoxProps>(({ theme, padding, style, children, ...props }) => ({
    borderColor: theme.color.divider.standard,
    padding: getSize(padding),
    ...props,
  })),
)
