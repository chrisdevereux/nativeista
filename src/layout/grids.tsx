import React = require('react')
import { View, ViewProps } from 'react-native'
import {
  calc,
  createChildStyler,
  createSingleChildStyler,
  percent,
  Style,
  styled,
} from '../util'
import { getSize } from './sizing'

export interface GridItemProps extends ViewProps {
  children?: React.ReactNode
  spacing?: number
  sizing?: number | string | 'equal'
  flex?: boolean
  align?: GridAlignment
  justify?: GridJustify
}

type GridAlignment = Style['alignItems']
type GridJustify = Style['justifyContent']

const gridParent = ({ align, justify }: GridItemProps): Style => ({
  alignItems: align,
  justifyContent: justify,
})

const gridChild = ({ flex }: GridItemProps): Style => ({
  flexShrink: 0,
  flexGrow: flex ? 1 : 0,
  position: 'relative',
})

const HorizontallySpacedContainer = createChildStyler<GridItemProps>(
  View,
  (props, { isFirst, count }) => ({
    marginLeft: isFirst ? 0 : getSize(props.spacing),
    ...(props.sizing ? { width: calculateSizing(count, props) } : {}),
  }),
)

const VerticallySpacedContainer = createChildStyler<GridItemProps>(
  View,
  (props, { isFirst, count }) => ({
    marginTop: isFirst ? 0 : getSize(props.spacing),
    ...(props.sizing ? { height: calculateSizing(count, props) } : {}),
  }),
)

function calculateSizing(count: number, props: GridItemProps) {
  if (props.sizing === 'equal') {
    const spacingPx = getSize(props.spacing) || 0
    const totalSpacing = spacingPx * (count - 1)
    const sizeAdjustment = totalSpacing / count

    return calc(percent(100 / count), '-', sizeAdjustment)
  }

  return props.sizing
}

export const Columns = styled(HorizontallySpacedContainer)(
  gridParent,
  gridChild,
  {
    flexDirection: 'row',
  },
)

export const Rows = styled(VerticallySpacedContainer)(gridParent, gridChild, {
  flexDirection: 'column',
})

export const Cell = createSingleChildStyler(gridChild)
