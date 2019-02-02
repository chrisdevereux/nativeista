import { storiesOf } from '@storybook/react'
import React from 'react'
import { Field } from '../field'

storiesOf('atoms > field', module).add('standard', () => (
  <Field width={9} value="Foo" />
))
