import React from "react";
import MapIcon from '@mui/icons-material/Map';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LogoutIcon from '@mui/icons-material/Logout';
import SubwayIcon from '@mui/icons-material/Subway';
import SummarizeIcon from '@mui/icons-material/Summarize';
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
        title : 'Metro List',
        icon : <SubwayIcon />,
        link : 'metrolist'
    },
    {
        title : 'Declarations',
        icon : <SummarizeIcon />,
        link : 'declarations'
    },
    {
        title : 'Log out',
        icon : <LogoutIcon/>,
        link : 'logout'
    },
]