import { Omit } from 'lodash'
import React from 'react'
import { Animated } from 'react-native'

interface TransitionProps {
  from: number
  to: number
  active: boolean
  kind?: TransitionKind
  children: (prop: Animated.Value) => React.ReactNode
}

type TransitionKind = (
  value: Animated.Value,
  next: number,
) => Animated.CompositeAnimation
type TransitionConfig<T extends { toValue: any }> = Omit<T, 'toValue'>

export class Transition extends React.Component<TransitionProps> {
  static linear(
    config: TransitionConfig<Animated.TimingAnimationConfig> = {},
  ): TransitionKind {
    return (value, next) =>
      Animated.timing(value, {
        ...config,
        toValue: next,
      })
  }

  static spring(
    config: TransitionConfig<Animated.SpringAnimationConfig> = {},
  ): TransitionKind {
    return (value, next) =>
      Animated.spring(value, {
        ...config,
        toValue: next,
      })
  }

  private animatedValue = new Animated.Value(this.targetValue)
  private active = false

  private get targetValue() {
    return this.props.active ? this.props.to : this.props.from
  }

  private get transitioner() {
    return this.props.kind || Transition.linear({ duration: 200 })
  }

  componentDidUpdate() {
    if (this.props.active !== this.active) {
      this.active = this.props.active
      this.transitioner(this.animatedValue, this.targetValue).start()
    }
  }

  render() {
    return this.props.children(this.animatedValue)
  }
}
