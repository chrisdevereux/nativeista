import { storiesOf } from '@storybook/react'
import React = require('react')
import { Field } from './field'

storiesOf('atoms > field', module).add('standard', () => (
  <Field width={9} value="Foo" />
))
