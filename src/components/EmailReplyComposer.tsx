import React, { useState } from 'react';
import { Email } from '../story/StoryTypes'
import { newTrigger } from '../actions'
import {  useSelector, useDispatch} from 'react-redux'

function EmailReplyComposer(props: { email: Email }) {
  const dispatch = useDispatch()
  const [replyText, updateReplyText] = useState("")

  function onButtonClick() {
    updateReplyText("")
    dispatch(newTrigger(props.email))
  }
  return (
    <div style={{ paddingTop: '10px', borderTop: "solid 1px black"}}>
      <p>Reply</p>
      <textarea value={replyText} onChange={(e) => updateReplyText(e.target.value) } />
      <p>
        <button onClick={onButtonClick}>Send</button>
      </p>
    </div>
  )
}

export default EmailReplyComposer