import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// componets
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import SingUp from "./Pages/SingUp";
// food btn  event context add

import CardContextProvider from "./context/CardContextProvider";
import ShoppingCart from "./Pages/ShoppingCart";
// chef data that i get it from api 

import ChefInfoContext from "./context/chefInfoContext"
import ChefInfo from "./components/chefInfo";

const App = () => {
    return (
        <>
            <CardContextProvider>
                <ChefInfoContext>
                <Routes>
                    <Route path='/' element={<SingUp />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/mainPage' element={<Homepage />} />
                    <Route path="/ShoppingCart" element={<ShoppingCart/> }/>
                    <Route path="/ChefInfo/:id" element={<ChefInfo/>}/>
                    <Route path='/*' element={<Navigate to='/' />} />
                </Routes>
                </ChefInfoContext>
            </CardContextProvider>

    
        </>
    );
};

export default App;
