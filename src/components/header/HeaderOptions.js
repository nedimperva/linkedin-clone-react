import React from 'react'
import "./HeaderOptions.css"
import Avatar from '@mui/material/Avatar';
import { selectUser } from '../../features/counter/userSlice';
import { useSelector } from 'react-redux';

function HeaderOptions({avatar, Icon, title, onClick}) {
  const user = useSelector(selectUser);
  return (
    <div className="headerOptions" onClick={onClick}>
      {Icon && <Icon className="headerOptions__icon" />}
      {avatar && (
          <Avatar className="headerOptions__icon"  src={user.photoURL} >{user.email[0]}</Avatar>
      )}
      <h3 className="headerOptions__title">{title}</h3>
    </div>
  )
}

export default HeaderOptions
