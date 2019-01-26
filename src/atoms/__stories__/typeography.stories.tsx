import { storiesOf } from '@storybook/react'
import React = require('react')
import { Heading, Paragraph, Subheading, Typeography } from '../typeography'

storiesOf('atoms > typeography', module).add('layout', () => (
  <Typeography spacing={2}>
    <Heading>Hello</Heading>
    <Paragraph>Lorem ipsuhhh, mf</Paragraph>
    <Heading>Hi</Heading>
    <Paragraph>Lorem ipsuhhh, mf</Paragraph>
    <Subheading>Hi</Subheading>
    <Paragraph>Lorem ipsuhhh, mf</Paragraph>
  </Typeography>
))
