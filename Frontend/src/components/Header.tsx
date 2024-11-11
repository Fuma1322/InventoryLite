/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from 'react-redux';
import { collapsedSidebar, toggleSidebar } from '../provider/slice/Sidebar.slice'
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoLogOutOutline } from "react-icons/io5";
import { removeUser } from '../provider/slice/user.slice';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const dispatch = useDispatch();
    const sidebarHandler = () =>  dispatch(collapsedSidebar());
    const sidebarHandlerToggle = () =>  dispatch(toggleSidebar());
    const navigate = useNavigate()
     
    const logoutHandler = () => {
        try {
            localStorage.removeItem('token');
            dispatch(removeUser());
            navigate('/login');  // Redirect to login page after logout
        } catch (error: any) {
            console.log(error.message);
        }
    }  
    return (
        <>
            <header className='py-4 shadow md px-10'>
              <div className="nav flex items-center justify-between">
                <div className="btn">
                <button onClick={sidebarHandlerToggle}><HiOutlineMenuAlt3 className='text-2xl' /></button>
                <button onClick={sidebarHandler}><HiOutlineMenuAlt3 className='text-2xl' /></button>
                <div className="end">
                <button title='logout' onClick={logoutHandler}><IoLogOutOutline className='text-2xl' /></button>
                </div>
                </div>
              </div>
            </header>
        </>
    )
}
        