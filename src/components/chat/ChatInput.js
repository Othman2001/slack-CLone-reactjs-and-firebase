import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import db from '../../firebase'
import { useStateValue } from '../../StateProvider'
import "./input.css"
import firebase from "firebase"
function ChatInput({channelName , channelId}) {
    const [input,setInput] = useState('')
    const [{user}] = useStateValue()
    const sendMessage = e=> {
     e.preventDefault()
     if(channelId){
         db.collection("rooms").doc(channelId).collection("messages").add({
          message: input,
          user: user.displayName,
          userImage: user.photoURL,
          timestamp:firebase.firestore.FieldValue.serverTimestamp()

         })
     }
    }
    return (
        <div className = "chatInput">
            <form>
                <input placeholder= {`Message # ${channelName}`} 
                 onChange = {e=> setInput(e.target.value)
                }
                className = "form"
              value = {input}
                 />
                <button type = "submit" onClick = {sendMessage} > send</button>
            </form>
        </div>
    )
}

export default ChatInput
 