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
      defaultPosition={{ x: 100, y: 30 }}
      onClose={() => dispatch(closeWindow('email'))}
      onClick={() => dispatch(focusWindow('email'))}
      open={windowShouldBeOpen}
      focused={focusedWindow}>
      <div className="email-app-content">
        <div className="row">
          <div className="email-list">
            <ul>
              <li>Subject: Today's Assignment</li> 
              <li>Subject: Welcome Back</li> 
            </ul>

          </div>
          <div className="focused-email">
            Welcome Back, pumpkin joe!

            Welcome Back, pumpkin joe!
            Welcome Back, pumpkin joe!
            Welcome Back, pumpkin joe!
            Welcome Back, pumpkin joe!
            Welcome Back, pumpkin joe!
            Welcome Back, pumpkin joe!
            Welcome Back, pumpkin joe!
            Welcome Back, pumpkin joe!
            Welcome Back, pumpkin joe!
            Welcome Back, pumpkin joe!
            Welcome Back, pumpkin joe!
            ppppp


          </div>
        </div>
      </div>
    </Window>
  )
}

export default EmailApp