import React from 'react'
import { Input, InputProps, InputWrapper } from '../atoms'
import { ActionToggle } from '../util'

export interface FieldProps extends InputProps {
  accessoryLeft?: React.ReactNode
  accessoryRight?: React.ReactNode
  width?: number
}

export function Field({
  accessoryLeft,
  accessoryRight,
  width,
  ...inputProps
}: FieldProps) {
  return (
    <ActionToggle>
      {({ active, activate, deactivate }) => (
        <InputWrapper focused={active} width={width}>
          {accessoryLeft}
          <Input onBlur={deactivate} onFocus={activate} {...inputProps} />
          {accessoryRight}
        </InputWrapper>
      )}
    </ActionToggle>
  )
}
