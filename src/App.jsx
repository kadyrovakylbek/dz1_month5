import React from "react";
import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import MenuPage from "./menuPage/MenuPage.jsx";
import PostsPage from "./postsPage/PostsPage.jsx";


const App = () => {
    return (
        <>
           <Routes>
               <Route path='/' element={<Layout/>}>
                   <Route index element={<MenuPage/>}/>
                   <Route path='/posts' element={<PostsPage/>}/>
               </Route>
           </Routes>
        </>
    );
};


export default App
