import React from 'react'
import { calc, createChildStyler, percent, styled } from '../util'
import { Box, BoxProps } from './box'
import { getSize } from './sizing'

export interface GridItemProps extends BoxProps {
  children?: React.ReactNode
  spacing?: number
  sizing?: number | string | 'equal'
}

const HorizontallySpacedContainer = createChildStyler<GridItemProps>(
  Box,
  (props, { isFirst, count }) => ({
    marginLeft: isFirst ? 0 : getSize(props.spacing),
    ...(props.sizing ? { width: calculateSizing(count, props) } : {}),
  }),
)

const VerticallySpacedContainer = createChildStyler<GridItemProps>(
  Box,
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

export const Columns = styled(HorizontallySpacedContainer)({
  flexDirection: 'row',
})

export const Rows = styled(VerticallySpacedContainer)({
  flexDirection: 'column',
})
