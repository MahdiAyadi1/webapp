import React from "react";
import MapIcon from '@mui/icons-material/Map';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LogoutIcon from '@mui/icons-material/Logout';

export const SidebarElements = [
    {
        title : 'Map',
        icon : <MapIcon />,
        link : 'map'
    },
    {
        title : 'Manage Accounts',
        icon : <ManageAccountsIcon />,
        link : 'manageaccounts'
    },
    {
        title : 'Timetable',
        icon : <EventNoteIcon />,
        link : 'timetable'
    },
    {
        title : 'Log out',
        icon : <LogoutIcon/>,
        link : 'logout'
    },
]