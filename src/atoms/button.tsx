import React = require('react')
import {
  Animated,
  Text,
  TouchableHighlightProps,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { Transition } from '../animations/transition'
import { Columns, getSizeToFit, GridItemProps } from '../layout'
import { getSize } from '../layout/sizing'
import {
  ActionToggle,
  elevation,
  pure,
  styled,
  styleOption,
  themed,
} from '../util'

export interface ButtonProps extends TouchableHighlightProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
}

interface ButtonWrapperProps extends ButtonProps {
  active$: Animated.Value
}

export type ButtonVariant = keyof typeof variants
export type ButtonSize = keyof typeof sizes

export function Button({
  children,
  onPress,
  onLongPress,
  ...props
}: ButtonProps) {
  return (
    <ActionToggle>
      {({ activate, deactivate, active }) => (
        <Transition from={0} to={1} active={active} kind={Transition.spring()}>
          {active$ => (
            <TouchableWithoutFeedback
              onPress={onPress}
              onLongPress={onLongPress}
              onPressIn={activate}
              onPressOut={deactivate}
            >
              <ButtonContent
                {...props}
                spacing={2}
                justify="center"
                align="center"
                active$={active$}
              >
                <Text>{children}</Text>
              </ButtonContent>
            </TouchableWithoutFeedback>
          )}
        </Transition>
      )}
    </ActionToggle>
  )
}

const variants = {
  standard: themed<ButtonWrapperProps>(({ theme, active$ }) => ({
    backgroundColor: theme.color.control.standard,
    minHeight: getSizeToFit(44),
    minWidth: getSizeToFit(44),
    ...elevation(
      active$.interpolate({
        inputRange: [0, 1],
        outputRange: [7, 2],
      }),
    ),
    transform: [
      {
        scale: active$.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0.95],
        }),
        perspective: 1000,
      },
    ],
    opacity: active$.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.8],
    }) as any,
  })),
}

const sizes = {
  medium: themed<ButtonWrapperProps>(() => ({
    paddingHorizontal: getSize(5),
  })),
}

export namespace Button {
  export const VARIANTS = Object.keys(variants) as ButtonVariant[]
  export const SIZES = Object.keys(sizes) as ButtonSize[]
}

const ButtonContent = styled<ButtonWrapperProps & GridItemProps>(
  Animated.createAnimatedComponent(pure(Columns)),
)(
  styleOption<ButtonWrapperProps>('variant', {
    options: variants,
    default: 'standard',
  }),
  styleOption<ButtonWrapperProps>('size', {
    options: sizes,
    default: 'medium',
  }),
  {
    position: 'relative',
  },
)
