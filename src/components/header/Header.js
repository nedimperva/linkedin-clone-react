import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from './profile.png';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/counter/userSlice';
import { auth } from '../../firebase';


function Header() {
  const dispatch = useDispatch();

  const logOutApp = () => {
    dispatch(logout())
    auth.signOut();
  };

  return (
    <div className="header">
        <div className="header__left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn icon" />

            <div className="header__search">
                <SearchIcon  />
                <input placeholder="search" type="text" />
            </div>
        </div>

        <div className="header__right">
            <HeaderOptions Icon={HomeIcon} title="Home" />
            <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOptions Icon={ChatIcon} title="Messaginning" />
            <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
            <HeaderOptions avatar={AccountCircleIcon} title="Me" onClick={logOutApp} />

        </div>
      
    </div>
  )
}

export default Header;
