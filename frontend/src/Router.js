import React from "react";
import {Routes,Route,Navigate} from 'react-router-dom'
import HomeScreen from "./Screens/HomeScreen";
import AboutScreen from "./Screens/AboutScreen";
import ContactScreen from "./Screens/ContactScreen";
import PortfolioScreen from "./Screens/PortfolioScreen";
import NotFoundScreen from "./Screens/NotFoundScreen"

const Router =()=>{
return(
<Routes>
    <Route path='/' element={<HomeScreen/>}/>
    <Route path='/about' element={<AboutScreen/>}/>
    <Route path='/portfolio' element={<PortfolioScreen/>}/>
    <Route path='/contact' element={<ContactScreen/>}/>
    <Route path='/notfound' element={<NotFoundScreen/>}/>

    <Route path="*" element={<Navigate to="/notfound"/>}/>
</Routes>
)
}
export  default Router