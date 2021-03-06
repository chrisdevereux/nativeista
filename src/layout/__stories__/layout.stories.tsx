import { storiesOf } from '@storybook/react'
import React from 'react'
import { View } from 'react-native'
import { Box } from '../box'
import { Columns, Rows } from '../grids'

storiesOf('layout > columns', module)
  .add('fixed equal width', () => (
    <Columns spacing={2} sizing="equal">
      <View style={{ width: 100, height: 100, backgroundColor: 'hotpink' }} />
      <View style={{ width: 100, height: 100, backgroundColor: 'hotpink' }} />
      <View style={{ width: 50, height: 100, backgroundColor: 'hotpink' }} />
      <View style={{ width: 200, height: 100, backgroundColor: 'hotpink' }} />
    </Columns>
  ))
  .add('fixed width', () => (
    <Columns spacing={2} sizing={40}>
      <View style={{ width: 100, height: 100, backgroundColor: 'hotpink' }} />
      <View style={{ width: 100, height: 100, backgroundColor: 'hotpink' }} />
      <View style={{ width: 50, height: 100, backgroundColor: 'hotpink' }} />
      <View style={{ width: 200, height: 100, backgroundColor: 'hotpink' }} />
    </Columns>
  ))
  .add('variable width', () => (
    <Columns spacing={2}>
      <View style={{ width: 100, height: 100, backgroundColor: 'hotpink' }} />
      <View style={{ width: 100, height: 100, backgroundColor: 'hotpink' }} />
      <View style={{ width: 50, height: 100, backgroundColor: 'hotpink' }} />
      <View style={{ width: 200, height: 100, backgroundColor: 'hotpink' }} />
    </Columns>
  ))
  .add('flex child', () => (
    <Columns spacing={2}>
      <Box
        flex={1}
        style={{ width: 100, height: 100, backgroundColor: 'hotpink' }}
      />
      <View style={{ width: 100, height: 100, backgroundColor: 'hotpink' }} />
      <View style={{ width: 50, height: 100, backgroundColor: 'hotpink' }} />
      <View style={{ width: 200, height: 100, backgroundColor: 'hotpink' }} />
    </Columns>
  ))

storiesOf('layout > rows', module)
  .add('fixed equal height', () => (
    <Rows
      spacing={2}
      sizing="equal"
      style={{ height: '100vh', position: 'relative' }}
    >
      <View style={{ width: 100, height: 100, backgroundColor: 'hotpink' }} />
      <View style={{ width: 100, height: 100, backgroundColor: 'hotpink' }} />
      <View style={{ width: 100, height: 50, backgroundColor: 'hotpink' }} />
      <View style={{ width: 100, height: 200, backgroundColor: 'hotpink' }} />
    </Rows>
  ))
  .add('fixed height', () => (
    <Rows spacing={2} sizing={40}>
      <View style={{ width: 100, height: 100, backgroundColor: 'hotpink' }} />
      <View style={{ width: 100, height: 100, backgroundColor: 'hotpink' }} />
      <View style={{ width: 100, height: 50, backgroundColor: 'hotpink' }} />
      <View style={{ width: 100, height: 200, backgroundColor: 'hotpink' }} />
    </Rows>
  ))
  .add('variable height', () => (
    <Rows spacing={2}>
      <View style={{ width: 100, height: 100, backgroundColor: 'hotpink' }} />
      <View style={{ width: 100, height: 100, backgroundColor: 'hotpink' }} />
      <View style={{ width: 100, height: 50, backgroundColor: 'hotpink' }} />
      <View style={{ width: 100, height: 200, backgroundColor: 'hotpink' }} />
    </Rows>
  ))
  .add('flex child', () => (
    <Rows spacing={2} style={{ height: '100vh', position: 'relative' }}>
      <Box
        flex={1}
        style={{ width: 100, height: 100, backgroundColor: 'hotpink' }}
      />
      <View style={{ width: 100, height: 100, backgroundColor: 'hotpink' }} />
      <View style={{ width: 100, height: 50, backgroundColor: 'hotpink' }} />
      <View style={{ width: 100, height: 200, backgroundColor: 'hotpink' }} />
    </Rows>
  ))
