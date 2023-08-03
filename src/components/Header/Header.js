import React, { useState } from "react";
import { Menu, ProSidebar, MenuItem, SidebarHeader, SidebarFooter, SidebarContent, SubMenu } from "react-pro-sidebar";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

function Header() {

    const [menuCollapse, setMenuCollapse] = useState(false)
    const [active, setactive] = useState(true)

    const menuIconClick = () => {
        setMenuCollapse(!menuCollapse);
    };

    const addagencyOnclick = () => {

    }

    return (
        <>
            <div id="header">
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            <p>{menuCollapse ? "Spangles" : "Spangles Infotech"}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {menuCollapse ? (
                                <FiArrowRightCircle />
                            ) : (
                                <FiArrowLeftCircle />
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={active} icon={<FiHome />}>HOME</MenuItem>
                            <MenuItem style={{ color: 'Black', fontWeight: 'bold', fontSize: '20px' }}>Master</MenuItem>
                            <MenuItem onClick={addagencyOnclick} icon={<FiHome />} link='/home'>Add Agency Details</MenuItem>
                            <MenuItem icon={<FiHome />}>Add Product Details</MenuItem>
                            <MenuItem style={{ color: 'Black', fontWeight: 'bold', fontSize: '20px', textDecorationLine: 'normal' }}>Operation</MenuItem>
                            <MenuItem icon={<FiHome />}>Purchase Items</MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default Header;