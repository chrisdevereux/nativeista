import { storiesOf } from '@storybook/react'
import { startCase } from 'lodash'
import * as React from 'react'
import { Text } from 'react-native'
import { Columns, Rows } from '../../layout'
import { ButtonControl, ButtonControlProps } from '../button-components'

const exampleButtons = (props: Partial<ButtonControlProps> = {}) => (
  <Rows spacing={2}>
    {Object.keys(ButtonControl.variants).map(variant => (
      <Columns key={variant} spacing={2}>
        <Text>{variant}</Text>
        {Object.keys(ButtonControl.sizes).map(size => (
          <ButtonControl
            key={size}
            {...props}
            variant={variant as any}
            size={size as any}
          >
            <Text>{startCase(size)} Size</Text>
          </ButtonControl>
        ))}
      </Columns>
    ))}
  </Rows>
)

storiesOf('atoms > button', module).add('standard', exampleButtons)
