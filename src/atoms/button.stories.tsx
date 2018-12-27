import { storiesOf } from '@storybook/react'
import { startCase } from 'lodash'
import * as React from 'react'
import { Text } from 'react-native'
import { Columns, Rows } from '../layout'
import { Button, ButtonProps } from './button'

const exampleButtons = (props: Partial<ButtonProps> = {}) => (
  <Rows spacing={2}>
    {Button.VARIANTS.map(variant => (
      <Columns key={variant} spacing={2}>
        <Text>{variant}</Text>
        {Button.SIZES.map(size => (
          <Button key={size} {...props} variant={variant} size={size}>
            {startCase(size)} Size
          </Button>
        ))}
      </Columns>
    ))}
  </Rows>
)

storiesOf('atoms > button', module).add('standard', exampleButtons)
