import React from 'react';
import NavBar from "../NavBar/NavBar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer.jsx";

const Layout = () => {
    return (
        <>
         <NavBar/>
          <Outlet/>
          <Footer/>
        </>
    );
};

export default Layout;