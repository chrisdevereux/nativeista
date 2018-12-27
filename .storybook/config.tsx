import { addDecorator } from '@storybook/react'
import { configure } from '@storybook/react'
import { ThemeProvider } from 'emotion-theming'
import * as React from 'react'
import { defaultTheme } from '../src/util/theme'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(children => (
  <ThemeProvider theme={defaultTheme}>{children()}</ThemeProvider>
))

configure(loadStories, module)
