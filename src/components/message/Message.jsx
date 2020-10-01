import React from 'react'
import './message.css'
function Message({message,user,userId,userImage , timestamp}) {
    console.log(message , "this is messages")
    return (
 
        <div className = "message">
          <img src = {userImage}  className = "message__image"/>
            <div className = "message__info">
                
                <h4>
                    {user} 
                    <span className = "time">
                    {new Date(timestamp?.toDate()).toUTCString()}{console.log(timestamp ," time")}

                    </span>
                    <p> {message} </p>
                </h4>
            </div>
        </div>
    )
}

export default Message
