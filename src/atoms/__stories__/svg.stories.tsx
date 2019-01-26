import { storiesOf } from '@storybook/react'
import React = require('react')
import { createSvgComponent } from '../svg'

storiesOf('atoms > svg', module).add('standard', () => <ExampleSVG />)

const ExampleSVG = createSvgComponent({
  displayName: 'Bench',
  src: require('./bench.svg'),
})
