import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName : null,
    userEmail : null,
    profilePhoto: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
        state.userName = action.payload.userName
        state.userEmail = action.payload.userEmail
        state.profilePhoto = action.payload.profilePhoto
    },
    setUserLogoutState: (state) => {
        state.userName = null
        state.userEmail = null
        state.profilePhoto = null
    }
  }
});

export const {setActiveUser, setUserLogoutState} = userSlice.actions

export const getUserName = state => state.user.userName;
export const getEmail = state => state.user.userEmail;
export const getProfilePhoto = state => state.user.profilePhoto;

export default userSlice.reducer