import React from 'react'

interface StateContainerConfig<T> {
  defaultState: T
}

interface StateContainerProps<T> {
  children: (props: StateContainerRenderProps<T>) => React.ReactNode
}

interface StateContainerRenderProps<T> {
  state: T
  setState: (state: Partial<T>) => void
}

interface StateContainerInternalState<T> {
  current: T
}

export function createStateContainer<T>(config: StateContainerConfig<T>) {
  return class StateContainer extends React.Component<
    StateContainerProps<T>,
    StateContainerInternalState<T>
  > {
    state: StateContainerInternalState<T> = {
      current: config.defaultState,
    }

    setCurrentState = (state: Partial<T>) =>
      this.setState({
        current: { ...(this.state.current as any), ...(state as any) },
      })

    render() {
      return this.props.children({
        state: this.state.current,
        setState: this.setCurrentState,
      })
    }
  }
}
