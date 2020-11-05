import React from 'react';

import './Sidebar.css';

import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="Sidebar__header">
        <Avatar src="https://avatar2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"/>
        <div className="Sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon/>
          </IconButton>

          <IconButton>
            <ChatIcon/>
          </IconButton>

          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>

      <div className="Sidebar__search">
        <div className="Sidebar__searchContainer">
          <SearchOutlinedIcon/>
          <input placeholder="Search or start new chat" type="text"/>
        </div>
      </div>

      <div className="Sidebar__chats">
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
      </div>
    </div>
  )
}

export default Sidebar
