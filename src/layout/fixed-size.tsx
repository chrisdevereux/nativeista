import React from 'react'
import {
  LayoutChangeEvent,
  LayoutRectangle,
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native'

interface FixedSizeProps {
  disable?: boolean
  style?: StyleProp<ViewStyle>
  children: React.ReactElement<ViewProps>
}

interface FixedSizeState {
  layout?: LayoutRectangle
}

export class FixedSize extends React.Component<FixedSizeProps, FixedSizeState> {
  state: FixedSizeState = {}

  handleLayout = (event: LayoutChangeEvent) => {
    if (!this.state.layout) {
      this.state.layout = event.nativeEvent.layout
    }
  }

  get layoutStyle(): ViewStyle | undefined {
    return (
      this.state.layout && {
        width: this.state.layout.width,
        height: this.state.layout.height,
      }
    )
  }

  render() {
    if (this.props.disable) {
      return this.props.children
    }

    return React.cloneElement(this.props.children, {
      style: [
        this.props.style,
        this.layoutStyle,
        this.props.children.props.style,
      ],
    })
  }
}
