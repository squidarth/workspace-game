import React from 'react';
import { createStore, combineReducers, compose } from 'redux'

export type OpenWindows = {[shack: string]: boolean, email: boolean, xcel: boolean }

export type FocusedWindow = string
export type WindowAction = {
  type: string,
  window: string
}

function openWindowsReducer(state: OpenWindows = {shack: false, email: false, xcel: false }, action: WindowAction) {
  switch (action.type) {
    case 'OPEN_WINDOW':
     
      var newState : OpenWindows = {
        ... state
      }
      newState[action.window] = true
      return newState
    case 'CLOSE_WINDOW':
      var newState : OpenWindows = {
        ... state
      }
      newState[action.window] = false
      return newState
  }
  return state;
}

function focusedWindowReducer(state: FocusedWindow = 'email', action: WindowAction) {
  switch (action.type) {
    case 'FOCUS_WINDOW': 
      return action.window
  }
  return state
}

export type FocusedEmailAction = {
  type: string,
  emailId: number
}

export type NewTriggersAction = {
  type: string,
  newEmailIds: number[],
  newShackIds: number[]
}

function focusedEmailIdReducer(state: number = 0, action: FocusedEmailAction) {
  switch (action.type) {
    case 'FOCUSED_EMAIL':
      return action.emailId
  }
  return state
}

function emailIdsToReadReducer(state: number[] = [0,1], action: NewTriggersAction) {
  switch (action.type) {
    case 'NEW_TRIGGER':
      return state.concat(action.newEmailIds)
  }
  return state
}

let emailsReducer = combineReducers({
  focusedEmail: focusedEmailIdReducer,
  emailIdsToRead: emailIdsToReadReducer
})

let rootReducer = combineReducers({
  openWindows: openWindowsReducer,
  focusedWindow: focusedWindowReducer,
  emails: emailsReducer
})

let store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
export type RootState = ReturnType<typeof rootReducer>

export default store