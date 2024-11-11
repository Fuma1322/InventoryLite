import React from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { SidebarSlicePath, toggleSidebar } from '../provider/slice/Sidebar.slice';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { LiaFileInvoiceSolid } from 'react-icons/lia';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';

const MainLayout = ({ children }:{children: React.ReactNode}) => {
    const selector = useSelector(SidebarSlicePath);
    const dispatch = useDispatch();
  return (
    <div className='flex items-start lg:gap-x-2'>
        <Sidebar collapsed={selector.collapsed} breakPoint="lg" toggled={selector.toggle}>
            <Menu>
                {/* <SubMenu label="Charts">
                    <MenuItem>Pie Charts</MenuItem>
                    <MenuItem>Line Charts</MenuItem>
                </SubMenu> */}
                <MenuItem className="lg:hidden" onClick={() => dispatch(toggleSidebar()) } > {selector.toggle ? <IoIosArrowDropright className="text-2xl" /> : <IoIosArrowDropleft className="text-2xl" />}</MenuItem>
                <MenuItem component={<Link to="/"/>} icon={<MdOutlineSpaceDashboard className='text-2xl' /> }>Dashboard</MenuItem>
               
                <MenuItem component={<Link to="/invoice"/>} icon={<LiaFileInvoiceSolid className='text-2xl' /> }>Invoice</MenuItem>
            </Menu>
        </Sidebar>
        <div className="w-full">
            {children}
        </div>
    </div>
  )
}

export default MainLayout