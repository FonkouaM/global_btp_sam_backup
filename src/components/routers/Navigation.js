import React, { Fragment } from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Service from "../../pages/services/Service";
import Realisations from "../../pages/realisations/Realisations";
import Contact from "../../pages/contacts/Contact";
import ReturnMerci from "../../pages/contacts/ReturnMerci"


const Navigation = () =>{
    return(
        <Fragment>
            <Routes>
                <Route index path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Service/>}/>
                <Route path='/realisations' element={<Realisations/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/merci' element={<ReturnMerci/>}/>
            </Routes>
        </Fragment>
    )
}

export default Navigation