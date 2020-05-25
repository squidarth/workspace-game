import { WindowAction } from './store'

function focusWindow(window: string) : WindowAction {
  return {
    type: 'FOCUS_WINDOW',
    window: window
  }
}

function closeWindow(window: string): WindowAction {
  return {
    type: 'CLOSE_WINDOW',
    window: window
  }
}

export { focusWindow, closeWindow }
