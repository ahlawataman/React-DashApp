import React from 'react'
import './home.css';
import { useNavigate } from "react-router-dom";
import {auth, provider} from '../../firebase';
import { signInWithPopup } from "firebase/auth";
import {useDispatch, useSelector} from 'react-redux'
import {getUserName, setActiveUser, setUserLogoutState } from '../../features/userSlice'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Home() {

  const dispatch = useDispatch();

  const userName = useSelector(getUserName);
  const nav = useNavigate();

  const handleSignIn = () => {
    signInWithPopup(auth, provider).then((res) => {
      console.log(res.user)
      dispatch(setActiveUser({
        userName: res.user.displayName,
        userEmail: res.user.email,
        profilePhoto: res.user.photoURL
      }));
    }).catch((err) => alert(err.message)).then(() => {
       nav("/dashboard")
    })
  }

  const handleSignOut = () => {
    auth.signOut().then(() => {
      dispatch(setUserLogoutState());
    }).catch((err) => alert(err.message))
  }

  return (
    <div className="home">
      <div>
        <ArrowBackIosIcon style={{marginRight: '0px'}}/>
            <span className='logo' style={{fontSize: '50px'}}>React DashApp</span>
        <ArrowForwardIosIcon style={{marginLeft: '5px'}}/>
      </div>
      <div id="animation-demo" className="animated bounce"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.633 20.633"><path fill="#000" d="M10.79 15.617l9.648-9.646c.133-.131.195-.301.195-.473s-.062-.344-.195-.473l-.012-.012a.66.66 0 00-.472-.195h-4.682a.656.656 0 00-.473.195l-4.48 4.479-4.48-4.479a.672.672 0 00-.473-.195H.684a.66.66 0 00-.475.195l-.013.012A.657.657 0 000 5.498a.66.66 0 00.196.473l9.648 9.646a.666.666 0 00.946 0z"/></svg></div>
      <div>
          {userName?(
            <button onClick={handleSignOut}>Sign Out</button>
            ):(
            <button onClick={handleSignIn} className="googleSignIn googleSignIn--white">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/G-on-clear.svg" alt="Google logo" />
              <span className="googleSignIn__text">Sign in with Google</span>
            </button>
          )
        }
        </div>
      </div>
  )
}
