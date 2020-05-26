import { Email } from './story/StoryTypes'
import { WindowAction, FocusedEmailAction, NewTriggersAction } from './store';

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

function selectEmail(emailId: number): FocusedEmailAction {
  return {
    type: 'FOCUSED_EMAIL',
    emailId: emailId
  }
}

function newTrigger(email: Email): NewTriggersAction {
  let nextEmailIds = email.replyTriggers.filter((trigger) => trigger.type === "email").map((trigger) => trigger.id)
  return {
    type: 'NEW_TRIGGER',
    newEmailIds: nextEmailIds,
    newShackIds: []
  }
}



export { focusWindow, closeWindow, selectEmail, newTrigger }
