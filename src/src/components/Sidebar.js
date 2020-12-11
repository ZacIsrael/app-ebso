import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import { Link } from "react-router-dom";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import SpaRoundedIcon from '@material-ui/icons/SpaRounded';
import ComputerIcon from '@material-ui/icons/Computer';
import RecordVoiceOverRoundedIcon from '@material-ui/icons/RecordVoiceOverRounded';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';


function Sidebar() {
    return (
        <div className="sidebar">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/book' className="sidebar_link">
                    <SidebarRow Icon = {ImportContactsIcon} title='Books' /> 
                </Link>
                <Link style={{ textDecoration: 'none', color: 'black' }}  to='/tech' className="sidebar_link" >
                    <SidebarRow Icon = {ComputerIcon} title="Technology" />
                </Link>
                <Link style={{ textDecoration: 'none', color: 'black' }}  to='/clothing' className="sidebar_link" >
                    <SidebarRow Icon = {SpaRoundedIcon} title="Clothing/Beauty" />
                </Link>
                <Link  style={{ textDecoration: 'none', color: 'black' }}  to='/lifestyle' className="sidebar_link" >
                    <SidebarRow Icon ={WbSunnyRoundedIcon} title="Lifestyle" />
                </Link>
                <Link style={{ textDecoration: 'none', color: 'black' }}  to='/about' className="sidebar_link" >
                    <SidebarRow Icon = {RecordVoiceOverRoundedIcon} title="About Us" />
                </Link>
        </div>
    ); 
}

export default Sidebar;
