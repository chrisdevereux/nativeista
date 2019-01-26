import { TextInput, TextInputProps, View } from 'react-native'
import { getSize } from '../layout'
import { styled, styleOption, themed } from '../util'

export interface InputProps extends TextInputProps {
  size?: 'standard'
}

export interface InputWrapperProps {
  focused?: boolean
  width?: number
}

const sizes = {
  standard: {
    padding: getSize(1),
    fontSize: getSize(3),
  },
}

export const Input = styled(TextInput)(
  styleOption<InputProps>('size', {
    options: sizes,
    default: 'standard',
  }),
)

export const InputWrapper = styled(View)(
  themed<InputWrapperProps>(({ theme, width: length, focused }) => ({
    borderColor: theme.color.divider.standard,
    borderWidth: 1,
    maxWidth: getSize(length),
    ...(focused && {
      borderBottomColor: theme.color.control.standard,
      borderBottomWidth: 2,
    }),
  })),
)
