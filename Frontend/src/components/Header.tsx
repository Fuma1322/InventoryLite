import { useDispatch } from 'react-redux';
import { collapsedSidebar, toggleSidebar } from '../provider/slice/Sidebar.slice'
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

export default function Header() {
    const dispatch = useDispatch();
    const sidebarHandler = () =>  dispatch(collapsedSidebar());
    const sidebarHandlerToggle = () =>  dispatch(toggleSidebar());
    
    return (
        <>
            <header className='py-4 shadow md px-10'>
                <button onClick={sidebarHandlerToggle}><HiOutlineMenuAlt3 className='text-2xl' /></button>
                <button onClick={sidebarHandler}><HiOutlineMenuAlt3 className='text-2xl' /></button>
            </header>
        </>
    )
}
        