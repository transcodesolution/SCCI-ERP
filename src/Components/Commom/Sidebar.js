import React from 'react'
import { data } from '../Route/Routedata'


import { NavLink } from 'react-router-dom'
const Sidebar = () => {
    return (
        <div className="sidebar_wrapper">
            <div className="sidebar_wrap">
                <div className="sidebar_block">
                    <h3 className="navigation_title">NAVIGATION</h3>
                    <ul className="sidebar_menu">
                        {data?.map((nav) => <li><NavLink to={`/${nav.route}`}>{nav.name}</NavLink></li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar