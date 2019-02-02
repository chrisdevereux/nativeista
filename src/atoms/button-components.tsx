import React from 'react'
import { View, ViewProps } from 'react-native'
import { getSize, getSizeToFit } from '../layout'
import { styled, styleOption, themed } from '../util'

export interface ButtonControlProps extends ViewProps {
  children: React.ReactNode
  disabled?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
}

export type ButtonVariant = keyof typeof variants
export type ButtonSize = keyof typeof sizes

const variants = {
  standard: themed<ButtonControlProps>(({ theme }) => ({
    backgroundColor: theme.color.control.standard,
    minHeight: getSizeToFit(44),
    minWidth: getSizeToFit(44),
  })),
}

const sizes = {
  medium: themed<ButtonControlProps>(() => ({
    paddingHorizontal: getSize(5),
  })),
}

export const ButtonControl = Object.assign(
  styled(View)(
    styleOption<ButtonControlProps>('variant', {
      options: variants,
      default: 'standard',
    }),
    styleOption<ButtonControlProps>('size', {
      options: sizes,
      default: 'medium',
    }),
    themed<ButtonControlProps>(({ disabled }) => ({
      position: 'relative',
      opacity: disabled ? 0.7 : 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    })),
  ),
  {
    variants,
    sizes,
  },
)
