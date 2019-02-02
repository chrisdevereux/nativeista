import { css } from 'chroma-js'
import React from 'react'
import { Animated, Text } from 'react-native'
import {
  ButtonControl,
  ButtonControlProps,
  TouchableAnimated,
  TouchableAnimatedProps,
} from '../atoms'
import { adaptInterpolation, styled, themed } from '../util'
import { Omit } from '../util/types'

export interface ButtonProps
  extends ButtonControlProps,
    Omit<TouchableAnimatedProps, 'children'> {}

export function Button({
  children,
  style,
  onPress,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <TouchableAnimated style={style} onPress={onPress} disabled={disabled}>
      {pressure => (
        <DarkeningButtonControl
          {...props}
          pressure={pressure}
          disabled={disabled}
        >
          <ButtonText>{children}</ButtonText>
        </DarkeningButtonControl>
      )}
    </TouchableAnimated>
  )
}

interface AnimatedButtonControlProps extends ButtonControlProps {
  pressure: Animated.Value
}

const ButtonText = styled(Text)({
  textAlign: 'center',
  flex: 1,
})

const DarkeningButtonControl = styled(ButtonControl.animated())(
  themed<AnimatedButtonControlProps>(({ pressure, ...props }) => ({
    ...adaptInterpolation(
      props,
      ButtonControl.variants[props.variant || 'standard'],
      styles => ({
        ...styles,
        backgroundColor:
          styles.backgroundColor &&
          (pressure.interpolate({
            inputRange: [0, 1],
            outputRange: [
              styles.backgroundColor,
              css(styles.backgroundColor)
                .darken(1)
                .css(),
            ],
          }) as any),
      }),
    ),
  })),
)
