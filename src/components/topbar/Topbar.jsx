import React from 'react'
import './topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
// import img from '../../images/profile_pic.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {auth, provider} from '../../firebase';
import {useDispatch, useSelector} from 'react-redux'
import {getProfilePhoto, setUserLogoutState} from '../../features/userSlice'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


export default function Topbar() {

    
    const dispatch = useDispatch();

    const handleSignOut = () => {
        auth.signOut().then(() => {
            dispatch(setUserLogoutState());
        }).catch((err) => alert(err.message))
        
    }

    const img = useSelector(getProfilePhoto);
    console.log(img)

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
                    <PopupState className="topAvatar" variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                            <Button {...bindTrigger(popupState)}>
                                <img src={img} alt="" className="topAvatar" />
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>Profile</MenuItem>
                            <MenuItem onClick={popupState.close}>My account</MenuItem>
                            <MenuItem onClick={handleSignOut}>Logout</MenuItem>
                            </Menu>
                        </React.Fragment>
                        )}
                    </PopupState>
                </div>
            </div>
        </div>
    )
}
