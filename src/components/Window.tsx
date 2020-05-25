import React, { useState} from 'react';
import { Resizable, ResizableBox, ResizeCallbackData } from 'react-resizable';
import Draggable from 'react-draggable'; // The default

function Window(props: { defaultPosition: {x: number, y: number}, open: boolean, focused: boolean, onClick: (e: React.SyntheticEvent) => void, onClose: () => any, children: React.ReactNode }) {
    return (
          <Draggable defaultPosition={props.defaultPosition} handle=".window-drag">
        <div onClick={props.onClick} style={{ overflow: 'auto', position: 'absolute', display: props.open ? 'inline-block': 'none', zIndex: props.focused ? 500 : 0}}>
                 <ResizableBox className="box" width={600} height={400} >
                  <div className="window no-cursor">
                    <div className="cursor window-drag">
                      <span onClick={props.onClose} className="window-close-button">
                          X
                      </span>
                    </div>
                    <div>
      
                      {props.children}
                    </div>
                  </div>
            </ResizableBox>
            </div>
         </Draggable>
    )
}

export default Window
