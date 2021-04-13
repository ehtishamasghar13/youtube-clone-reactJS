import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar";
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"/>
            </div>
            
            <div className="header__input">
                <input placeholder="Search" type="text" />
                <SearchIcon className="header_inputButton" />   
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationIcon className="header__icon"/>
                <Avatar src="https://avatars.githubusercontent.com/u/57295751?v=4" alt="Malik" />
            </div>
            



        
        </div>
    )
}

export default Header
