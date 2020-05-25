import React from 'react';
import Window from './Window'

import { focusWindow, closeWindow } from '../actions'
import { useSelector, useDispatch} from 'react-redux'
import { RootState } from '../store';

function Shack() { 
  const windowShouldBeOpen = useSelector((state: RootState) => state.openWindows.shack)
  const focusedWindow = useSelector((state: RootState) => state.focusedWindow == "shack")
  const dispatch = useDispatch()

  return (
    <Window defaultPosition={{x: 200, y: 60}} onClose={() => dispatch(closeWindow('shack'))} onClick={() => dispatch(focusWindow('shack'))} open={windowShouldBeOpen} focused={focusedWindow}>
      <div>Shack</div>
    </Window>
  )

}

export default Shack