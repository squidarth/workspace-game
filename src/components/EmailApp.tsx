import React from 'react';
import Window from './Window'
import './EmailApp.css'
import { focusWindow, closeWindow, selectEmail } from '../actions'
import { useSelector, useDispatch} from 'react-redux'
import { RootState } from '../store';
import Emails from '../story/Emails'
import { Email } from '../story/StoryTypes'
import EmailReplyComposer from './EmailReplyComposer';

function emailList(emails: Email[], selectEmail: (id: number) => void) {
  const list = emails.map((email) => 
    <li onClick={() => selectEmail(email.id) } className="email-selector"><a href="#">{email.subject}</a></li>
  )

  return (
    <ul className="email-list-content">
      {list}
    </ul>
  )
}

function renderFocusedEmail(email: Email) {
  return (<div className="focused-email">
    <div className="subject">
      <strong>Subject: </strong><span>{email.subject}</span>
    </div>
    <div className="from">
      <strong>From: </strong>
      <span>{email.from}</span>
    </div>
    <div className="to">
      <strong>To: </strong>
      <span>{email.to}</span>
    </div>
    <div className="body">
      <p>
        {email.body}
      </p>
    </div>
    <EmailReplyComposer email={email} />
  </div>)
}
function EmailApp() {
  const availableEmails = useSelector((state: RootState) => state.emails.emailIdsToRead).map((id) => Emails[id])
  const focusedEmail = Emails[useSelector((state: RootState) => state.emails.focusedEmail)]
  const windowShouldBeOpen = useSelector((state: RootState) => state.openWindows.email)
  const focusedWindow = useSelector((state: RootState) => state.focusedWindow == "email")
  const dispatch = useDispatch()
  return (
    <Window
      defaultPosition={{ x: 100, y: -200 }}
      onClose={() => dispatch(closeWindow('email'))}
      onClick={() => dispatch(focusWindow('email'))}
      open={windowShouldBeOpen}
      focused={focusedWindow}>
      <div className="email-app-content">
        <div className="row">
          <div className="email-list">
            {emailList(availableEmails, (emailId) => dispatch(selectEmail(emailId)) )}
          </div>
          {renderFocusedEmail(focusedEmail)}
        </div>
      </div>
    </Window>
  )
}

export default EmailApp