import React from 'react';
import './SidebarChat.css';

import { Avatar } from '@material-ui/core';

function SidebarChat() {
  return (
    <div className="SidebarChat">
      <Avatar/>
      <div className="SidebarChat__info">
        <h2>Room Name</h2>
        <p>Last Message Sent</p>
      </div>

    </div>
  )
}

export default SidebarChat
