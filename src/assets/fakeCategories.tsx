import React from 'react';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import {AttachFile, Notifications} from "@material-ui/icons";

export const categories = [
    {
        id: 'En cours ',
        children: [
            { id: 'AutoComplete', icon: <PeopleIcon />, active: false },
            { id: 'Listing', icon: <DnsRoundedIcon />,active: false },
            { id: 'Calendrier', icon: <PermMediaOutlinedIcon />,active: false },
            { id: 'Notifier', icon: <Notifications />,active: false },
            { id: 'DropZone', icon: <AttachFile />,active: false },
        ],
    },
    {
        id: 'Fini',
        children: [
            { id: 'AutoComplete', icon: <PeopleIcon />,active: false },
            { id: 'Listing', icon: <DnsRoundedIcon />,active: false },
            { id: 'Calendrier', icon: <PermMediaOutlinedIcon />,active: false },
        ],
    },
];