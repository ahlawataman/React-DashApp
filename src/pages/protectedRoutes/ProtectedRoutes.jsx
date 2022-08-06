import { Navigate, Outlet } from "react-router-dom";
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './ProtectedRoutes.css'
import {useSelector} from 'react-redux'
import {getUserName} from '../../features/userSlice'

const ProtectedRoutes = () => {

    const userName = useSelector(getUserName)

    if (!userName) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <Topbar/>
            <div className='container'>
                <Sidebar/>
                <Outlet />
            </div>
        </>
    )
};

export default ProtectedRoutes;