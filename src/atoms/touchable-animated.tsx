import React from 'react'
import {
  Animated,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native'
import { Transition, TransitionKind } from '../animations/transition'
import { ActionToggle } from '../util'

export interface TouchableAnimatedProps extends TouchableWithoutFeedbackProps {
  transition?: TransitionKind
  children: (value: Animated.Value) => React.ReactNode
}

export function TouchableAnimated({
  transition,
  children,
  ...touchableProps
}: TouchableAnimatedProps) {
  return (
    <ActionToggle>
      {({ activate, deactivate, active }) => (
        <Transition from={0} to={1} active={active} kind={transition}>
          {active$ => (
            <TouchableWithoutFeedback
              {...touchableProps}
              onPressIn={activate}
              onPressOut={deactivate}
            >
              {children(active$)}
            </TouchableWithoutFeedback>
          )}
        </Transition>
      )}
    </ActionToggle>
  )
}
