import * as React from 'react'
import { ViewProps } from 'react-native'
import { Style } from './styled'

/**
 * Create a wrapper component that styles each of its children using a style function.
 * Useful for simulating the > css operator
 */
export function createChildStyler<Props>(
  Component: React.ComponentType<Props>,
  opts: (
    props: Props,
    ctx: { isFirst: boolean; count: number },
    t: React.ComponentType | string,
  ) => Style,
): (props: Props) => React.ReactElement<{}> {
  return React.forwardRef(({ children, ...props }: any, ref: any) => {
    const count = React.Children.toArray(children).filter(React.isValidElement)
      .length

    const firstElement = React.Children.toArray(children).findIndex(
      React.isValidElement,
    )

    return (
      <Component ref={ref} {...props}>
        {React.Children.map(children, (child, i) => {
          if (!React.isValidElement<ViewProps>(child)) {
            return child
          }

          return React.cloneElement(child, {
            ...child.props,
            style: [
              child.props.style,
              opts(props, { isFirst: i <= firstElement, count }, child.type),
            ],
          })
        })}
      </Component>
    )
  }) as any
}

/**
 * Create a wrapper component that styles its only child using a style function
 */
export function createSingleChildStyler<Props>(
  styleFn: (fn: Props) => Style,
): React.ComponentType<Props> {
  return ({ children, style: outerStyle, ...outerProps }: any) => {
    const {
      type,
      props: { style: innerStyle, children: innerChildren, ...innerProps },
    } = React.Children.only(children)

    return React.createElement(
      type,
      {
        ...innerProps,
        style: [innerStyle, outerStyle, styleFn(outerProps)].flat(),
      },
      ...React.Children.toArray(innerChildren),
    )
  }
}
