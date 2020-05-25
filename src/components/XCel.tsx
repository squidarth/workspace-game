import React from 'react';
import Window from './Window'

import { focusWindow, closeWindow } from '../actions'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store';

function XCel() { 

  const windowShouldBeOpen = useSelector((state: RootState) => state.openWindows.xcel)
  const focusedWindow = useSelector((state: RootState) => state.focusedWindow == "xcel")
  const dispatch = useDispatch()

  return (
    <Window defaultPosition={{x: 250, y: -100}} onClose={() => dispatch(closeWindow('xcel'))} onClick={() => dispatch(focusWindow('xcel'))} open={windowShouldBeOpen} focused={focusedWindow}>
      <div>XCel</div>
    </Window>
  )

}

export default XCel