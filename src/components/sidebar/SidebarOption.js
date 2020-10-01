import React from 'react'
import { useHistory } from 'react-router-dom'
import db from '../../firebase'
import "./sidebarOptions.css"

function SidebarOption({title,Icon,addChannelOption ,id}) {
    const history = useHistory()
    const selectChannel = ()=>{
     if(id){
       history.push(`/room/${id}`)
     }else{
         history.push('title')
     }
    }      
    const addChannel = ()=> {
      const channelName = prompt('please Enter the chaneel name')
      if(channelName){
          db.collection('rooms').add({
              name: channelName
          })
      }
    }
    return (
        <div className = "sidebarOptions"
         onClick = {addChannelOption ?  addChannel : selectChannel }>
              {Icon && < Icon className = "sidebarOption__icon" />}
          {Icon? (
              <h3> {title}</h3>
          ):(
              <h3 className = "sidebarOptions_channel">  <span className = "sidebarOptions__hash"> #</span> {title} </h3>
          )}
        </div>
    )
}

export default SidebarOption
