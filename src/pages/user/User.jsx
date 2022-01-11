import React from 'react'
import './user.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newuser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://randomuser.me/api/portraits/thumb/men/36.jpg" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Phoenix Williams</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentityIcon className='userShowIcon'/>
                            <span className="userShowInfoTitle">phoenix.williams99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarTodayIcon className='userShowIcon'/>
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroidIcon className='userShowIcon'/>
                            <span className="userShowInfoTitle">+1 123 456 67</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutlineIcon className='userShowIcon'/>
                            <span className="userShowInfoTitle">phoenix.williams@example.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearchingIcon className='userShowIcon'/>
                            <span className="userShowInfoTitle">New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder='phoenix.williams99' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder='Phoenix Williams' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder='phoenix.williams@example.com' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder='+1 123 456 67' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder='New York | USA' className='userUpdateInput'/>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://randomuser.me/api/portraits/thumb/men/36.jpg" alt="" className="userUpdateImg" />
                                <label for='file'>
                                    <FileUploadIcon className='userUpdateIcon'/>
                                </label>
                                <input type="file" id='file' style={{display:'none'}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
