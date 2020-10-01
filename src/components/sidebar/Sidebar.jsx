import React,{useEffect, useState} from 'react'
import "./sidebar.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from "@material-ui/icons/Create"
import SidebarOption from './SidebarOption'
import InserCommentIcon from '@material-ui/icons/InsertComment'
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import FileCopyIcon from '@material-ui/icons/FileCopy'
import PeaopleAltIcon from "@material-ui/icons/PeopleAlt"
import AppsIcon from "@material-ui/icons/Apps"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { PeopleAlt } from '@material-ui/icons'
import AddIcon from '@material-ui/icons/Add';
import db from '../../firebase' 
import {useStateValue} from '../../StateProvider'
function Sdiebar (){
    const [collapse , setCollapse] = useState(true)
    const [less, setLess] = useState(false)
    const [channels,setChannels] = useState([])
    const [  { user } ,  dispatch] = useStateValue()
     useEffect(()=>{
        db.collection('rooms').onSnapshot(snapshot=>(
            setChannels(
                snapshot.docs.map(doc=>({
                    id: doc.id,
                    name: doc.data().name,
                }))
            )
        ))
     },[])
    
const name = "sidebar"
const other = "none"

    return(
        <div>
        <div className ={
            collapse? (name): (other)
        }>
   <div className="sidebar__header">
    <div className="sidebar__info">
    <h2> </h2>
       <h3> 
           <FiberManualRecordIcon  className = "sidebar__icon"/>
           {user?.displayName}
            </h3>
    </div>
    <div className = "sidebar_collabse">
    {
    collapse ? (
        <button onClick = {()=> setCollapse(false)}
        className = "close"
        > X </button>

    ):(
        <button onClick = {()=> setCollapse(true)}
        className = "open"> ----></button>
    )        }
    </div>
 
   </div>
   <SidebarOption Icon = {InserCommentIcon}  title = "threads" />
   <SidebarOption Icon = {InboxIcon}  title = "Mention & reactions " />
   <SidebarOption Icon = {DraftsIcon}  title = "Saved & Items" />
   <SidebarOption Icon = {BookmarkBorderIcon}  title = "Channel Browser" />
   <SidebarOption Icon = {PeaopleAltIcon}  title = "peaople & user and groupes" />
   <SidebarOption Icon = {AppsIcon}  title = "Apps" />
   <SidebarOption Icon = {FileCopyIcon}  title = "File Browser" />
   <SidebarOption Icon = {ExpandLessIcon}  title = "Showe Less"   />
   <hr />
   <SidebarOption Icon = {ExpandMoreIcon}  title = "Channels" />
   <hr />
   <SidebarOption Icon = {AddIcon}  title = "Add Channels" addChannelOption = {true}/>

{/* connect to the db */}
{channels.map(channel=> (
    <SidebarOption title ={channel.name} id ={channel.id}  key = {channel.id} />
))}



    </div>



{
    collapse ? (
        <button onClick = {()=> setCollapse(false)}
        className = "close"
        > X </button>

    ):(
        <button onClick = {()=> setCollapse(true)}
        className = "open"> ----></button>
    )        }
    )
</div>
    )}

    

export default Sdiebar



