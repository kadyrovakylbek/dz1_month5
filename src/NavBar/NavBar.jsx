import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to={'/'}>home</NavLink>
                </li>
                <li>
                    <NavLink to={'/posts'}>Posts</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;