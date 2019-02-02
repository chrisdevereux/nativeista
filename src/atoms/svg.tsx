// tslint:disable:no-var-requires

import React from 'react'
import { ViewProps } from 'react-native'

interface SvgConfig extends ViewProps {
  src: any
  displayName: string
  defaultProps?: Partial<SvgProps>
}

export interface SvgProps extends ViewProps {
  fill?: string
  width?: string | number
  height?: string | number
}

export function createSvgComponent({
  displayName,
  src,
  defaultProps = {},
}: SvgConfig) {
  const Type = src.default || (src as React.ComponentType<SvgProps>)

  return Object.assign(
    (props: SvgProps) => <Type {...defaultProps} {...props} />,
    { displayName, defaultProps },
  )
}
