import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import {Avatar} from "@material-ui/core"
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import "./header.css"
import { useStateValue } from '../../StateProvider';
function Header  (){
    const [{user}] = useStateValue()
 return(
    <div className = "header">
    <div className = "header__left">
        <Avatar className = "header__avatar" alt = {user?.displayName}
        src = {user?.photoURL} />
        {/* Avatars for loggid in user */}
        {/* Time Icon */}
        <AccessTimeIcon />
    </div>
    <div className="header__search">
        {/* search icon */}
        {/* input */}
        <SearchIcon />
        <input placeholder ="search here" />
    </div>
    <div className = "header__right">
        {/* help icon */}
        <HelpIcon />
    </div>
    </div>
 )

}
export default Header