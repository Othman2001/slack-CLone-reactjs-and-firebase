import React,{useState} from 'react'
import {useParams} from "react-router-dom"
import StarBorderOutLinedIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutLinedIcon from "@material-ui/icons/InfoOutlined"
import "./chat.css"
import db from '../../firebase'
import { useEffect } from "react"
import Message from '../message/Message'
import ChatInput from './ChatInput'
function Chat() {
    const [roomDetails, setRoomDetails] = useState(null)
    const {roomId} = useParams()
    const [roomMessages, setRoomMessages] = useState([])
   useEffect(()=>{
      if(roomId){
          db.collection("rooms")
          .doc(roomId)
          .onSnapshot((snapshot)=>setRoomDetails(snapshot.data() ))
      }
      db.collection('rooms').doc(roomId)
      .collection('messages')
      .orderBy("timestamp","asc")
      .onSnapshot((snapshot)=>setRoomMessages(snapshot.docs.map(doc=> doc.data())))

   },[roomId])
  console.log(roomDetails , "deatiles")
  console.log(roomMessages , "messages")
    return (
        <div className = "chat">
         
            <div className = "chat__header">
            <div className = "chat__headerleft">
                <h4 className = "chat__channelName"> 
    <strong># {roomDetails?.name}</strong>
    <StarBorderOutLinedIcon />
                  </h4>
            </div>
       <div className = "chat__headerRight">
           <p>
           <InfoOutLinedIcon /> Details
               
           </p>
       </div>
            </div>
            <div className="chat__messages">
                {/* messages */}
                {roomMessages?.map(({message,user,userImage , timestamp})=>(
                    <Message 
                    message = {message}
                    user = {user}
                    userImage={userImage}
                    timestamp = {timestamp}

                
                    />
                ))}
                  {console.log(roomDetails, "this is the what ")}
            </div>
            <ChatInput 
            channelName = {roomDetails?.name} channelId = {roomId} />
        </div>
    )
}

export default Chat
