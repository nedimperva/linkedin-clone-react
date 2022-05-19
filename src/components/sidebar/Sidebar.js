import React from 'react';
import "./Sidebar.css"
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';

function Sidebar() {
  const user = useSelector(selectUser);

  return (
    <div className="sidebar">
      <div className="sidebar__top">
          <img src="https://images.unsplash.com/photo-1557683316-973673baf926" alt="gradient background image" />
          <Avatar src={user.photoURL} className="sidebar__avatar" >{user.email[0]}</Avatar>
          <h2>{user.displayName}</h2>
          <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">

          <div className="sidebar__stat">
              <p>Profile visits</p>
              <p className="sidebar__number">2.543</p>
          </div>

          <div className="sidebar__stat">
          <p>Post views</p>
          <p className="sidebar__number">3.543</p>              
          </div>

      </div>
    </div>
  )
}

export default Sidebar
