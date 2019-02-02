import { addDecorator } from '@storybook/react'
import { configure } from '@storybook/react'
import * as React from 'react'
import { defaultTheme, Nativeista } from '../src'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(children => (
  <Nativeista theme={defaultTheme}>{children()}</Nativeista>
))

configure(loadStories, module)
