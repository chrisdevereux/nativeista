import { Text, TextProps } from 'react-native'
import { getSize, Rows } from '../layout'
import { createChildStyler, styled, Theme, themed } from '../util'

interface TypeographyProps extends TextProps {}

export const Typeography = createChildStyler(
  Rows,
  (props, ctx, type) =>
    !ctx.isFirst && {
      ...(type === Heading && { paddingTop: getSize(2) }),
      ...(type === Subheading && { paddingTop: getSize(2) }),
    },
)

export const Heading = createTypeography('heading')
export const Subheading = createTypeography('subheading')
export const Paragraph = createTypeography('paragraph')
export const Caption = createTypeography('caption')

export function createTypeography(key: keyof Theme['text']) {
  return styled(Text)(themed<TypeographyProps>(({ theme }) => theme.text[key]))
}
