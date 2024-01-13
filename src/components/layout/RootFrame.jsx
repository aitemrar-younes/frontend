import React, { useEffect, useState } from 'react'
import '/src/assets/Styles/RootFrame.scss'

import { RxHamburgerMenu } from "react-icons/rx";
import { IoNotifications } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";


import { FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

const RootFrame = ({children}) => {
    const [isCollapsed, setIsCollapsed] = useState(JSON.parse(localStorage.getItem('isCollapsed')) ?? false )
    const [ dropDownVisible, setDropDownVisible ] = useState(false)

    useEffect(() => {
        localStorage.setItem('isCollapsed', JSON.stringify(isCollapsed));
    }, [isCollapsed]);

  return (
    <div className={isCollapsed?'__RootFrame__ collapsed':'__RootFrame__'}>
        <div className="sidebar">
            <div className="header">
                <img className='logo' src="/src/assets/Logos/adobexd-color.svg" alt="Logo" />
                <h2 className="brandText">
                    Brand
                </h2>
            </div>
            <div className="body">
                <ul className="link-list">
                    
                    <li className="link-item caption">Dahsboard</li>
                    <li className="link-item link">dashbord</li>
                    <li className="link-item link">statistics</li>
                    <li className="link-item link">next move</li>
                    <li className="link-item caption">home</li>
                    <li className="link-item link">baraque</li>
                    <li className="link-item link">coffrage</li>
                    <li className="link-item link">location</li>
                    <li className="link-item caption">baraque</li>
                    <li className="link-item link">list</li>
                    <li className="link-item link">nouveau</li>
                    <li className="link-item link">reformer</li>
                    <li className="link-item caption">coffrage</li>
                    <li className="link-item link">list</li>
                    <li className="link-item link">nouveau</li>
                    <li className="link-item link">reformer</li>

                    <li className="link-item caption">Dahsboard</li>
                    <li className="link-item link">dashbord</li>
                    <li className="link-item link">statistics</li>
                    <li className="link-item link">next move</li>
                    <li className="link-item caption">home</li>
                    <li className="link-item link">baraque</li>
                    <li className="link-item link">coffrage</li>
                    <li className="link-item link">location</li>
                    <li className="link-item caption">baraque</li>
                    <li className="link-item link">list</li>
                    <li className="link-item link">nouveau</li>
                    <li className="link-item link">reformer</li>
                    <li className="link-item caption">coffrage</li>
                    <li className="link-item link">list</li>
                    <li className="link-item link">nouveau</li>
                    <li className="link-item link">reformer</li>
                
                </ul>
            </div>
        </div>
        <div className="main">
            <div className="header">
                <div className="col">
                    <button className='sideBar-toglle' onClick={()=>setIsCollapsed((prev)=>!prev)}>
                        <RxHamburgerMenu color='#303c54' size={32} />
                    </button>
                </div>
                <div className="col">
                    <button className='notification_button'>
                        <IoNotifications size={20} color='#303c54' />
                        <span>15</span>
                    </button>
                    <div className="profile_wrraper">
                        <div className="name" onClick={()=>setDropDownVisible((prev)=>!prev)}>Profile name</div>
                        <div className="image_container" onClick={()=>setDropDownVisible((prev)=>!prev)}>
                            <img src="/src/assets/profile/Abdelmadjid-Tebbourne-Africa-Intelligence.jpg" alt="" />
                        </div>
                        <div className={dropDownVisible?"dropdown_container visible":"dropdown_container"}>
                            <ul className="profile_link_list">
                                <li className="profile_link_item">
                                    <FaUser size={18} className='profile_icon' />
                                    Profile
                                </li>
                                <li className="profile_link_item">
                                    <IoSettingsSharp size={18} className='profile_icon' />
                                    Settings
                                </li>
                                <li className="profile_link_item">
                                    <TbLogout size={18} className='profile_icon' />
                                    Deconnecter
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button className='darkMode_button'>
                        <MdLightMode size={20} color='#303c54' />
                    </button>
                </div>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    </div>
  )
}

export default RootFrame