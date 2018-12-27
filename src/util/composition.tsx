import React = require('react')

export function enclose<Props>(
  Inner: React.ComponentType<Props>,
  ...rest: React.ComponentType[]
) {
  return (props: Props) =>
    rest.reduce(
      (prev, Component) => <Component>{prev}</Component>,
      <Inner {...props} />,
    )
}

export function pure<Props>(Component: React.ComponentType<Props>) {
  return class Pure extends React.PureComponent {
    render() {
      return <Component {...this.props} />
    }
  }
}
