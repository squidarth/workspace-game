import React from 'react';
import Window from './Window'
import './EmailApp.css'
import { focusWindow, closeWindow } from '../actions'
import { useSelector, useDispatch} from 'react-redux'
import { RootState } from '../store';

function EmailApp() { 
  const windowShouldBeOpen = useSelector((state: RootState) => state.openWindows.email)
  const focusedWindow = useSelector((state: RootState) => state.focusedWindow == "email")
  const dispatch = useDispatch()
  return (
    <Window
      defaultPosition={{ x: 100, y: -100 }}
      onClose={() => dispatch(closeWindow('email'))}
      onClick={() => dispatch(focusWindow('email'))}
      open={windowShouldBeOpen}
      focused={focusedWindow}>
      <div className="email-app-content">
        <div className="row">
          <div className="email-list">
            <ul className="email-list-content">
              <li className="email-selector"><a href="#">Today's Assignment</a></li> 
              <li className="email-selector"><a href="#">Welcome Back</a></li> 
            </ul>

          </div>
          <div className="focused-email">
            <div className="subject">
              <strong>Subject: </strong><span>Today's Assignment</span>
            </div>
            <div className="from">
              <strong>From: </strong>
              <span>steve@awesomecorp.com</span>
            </div>
            <div className="to">
              <strong>To: </strong>
              <span>sid@awesomecorp.com</span>
            </div>
            <div className="body">
              <p>
                Hey Sid,<br />
                <br />
                Hope you had a nice relaxing time w/ the fam in Costa Rica! We're stoked to have you back.<br />
<br />
                I figured today you'd be catching up on email and whatnot so don't want to over-burden you, but if you have a second, I'm doing some analysis--could you take a look at the PTO data in X-Lerate and let me know how many TLOs were filled out last month.<br />
                <br />
                Stay chill,<br />
                Steve Cahill, CPA
              </p>
            </div>



          </div>
        </div>
      </div>
    </Window>
  )
}

export default EmailApp