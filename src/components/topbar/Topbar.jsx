import React from 'react'
import './topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import img from '../../images/profile_pic.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <ArrowBackIosIcon style={{marginRight: '0px'}}/>
                    <span className='logo'>React DashApp</span>
                    <ArrowForwardIosIcon style={{marginLeft: '5px'}}/>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageIcon/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon/>
                    </div>
                    <img src={img} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
