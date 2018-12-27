import * as React from 'react'

interface ActionToggleProps {
  children: (props: ActionToggleRenderProps) => React.ReactNode
}

interface ActionToggleRenderProps {
  active: boolean
  activate: () => void
  deactivate: () => void
}

interface ActionToggleState {
  active: boolean
}

export class ActionToggle extends React.Component<
  ActionToggleProps,
  ActionToggleState
> {
  state: ActionToggleState = {
    active: false,
  }

  activate = () => {
    this.setState({ active: true })
  }

  deactivate = () => {
    this.setState({ active: false })
  }

  render() {
    return this.props.children({
      ...this.state,
      activate: this.activate,
      deactivate: this.deactivate,
    })
  }
}
