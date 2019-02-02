import { storiesOf } from '@storybook/react'
import React from 'react'
import { Button } from '../button'

storiesOf('molecules > button', module).add('Standard', () => (
  <Button>Hello!</Button>
))
