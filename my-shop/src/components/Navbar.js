import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
 import { ReactDOM } from "react";
// styles
import Styles from "./Navbar.module.css";
// AiOutlineMenu
import {AiOutlineMenu} from "react-icons/ai"

import { FoodBtnContext } from "../context/CardContextProvider";
// reudecer
import { FaShoppingCart } from "react-icons/fa";
import { useReducer } from "react";

const initalState = {
    setPosition: 0,
};


const Navbar = () => {
    const Reducer = (state, action) => {
        switch (action.type) {
            case "ABOUT_US":
                return { ...state, setPosition: document.documentElement.scrollTop = action.payload };
    
            case "CHEFS":
                return { ...state, setPosition: document.documentElement.scrollTop = action.payload };
            case "MENU":
                return { ...state, setPosition: document.documentElement.scrollTop = action.payload };
            case "COMMENTS":
                return { ...state, setPosition: document.documentElement.scrollTop = action.payload };
            case "CONTACT_US":
                return { ...state, setPosition: document.documentElement.scrollTop = action.payload };
            default:
                return state;
        }
    };
    const [setPosition, dispatch] = useReducer(Reducer, initalState);

    //get  conter from context

    const { foodBtnEvent } = useContext(FoodBtnContext);

    //get the ref
    
    return (

        <nav className={Styles.Container_Nav}>
            <div>
                <h1 className={Styles.title}>
                    Heyadr <span className={Styles.circle}></span> Food
                </h1>
            </div>
            <div>
                <ul className={Styles.list}>
                    <li className={Styles.basketIcon}>
                        <Link to='/ShoppingCart'>
                            <FaShoppingCart className={Styles.ShoppingIcon} />
                            <h5 className={Styles.conterBasket}>
                                {foodBtnEvent.foodsCounter}
                            </h5>
                        </Link>
                    </li>

                    <li>
                        <Link to='#' onClick={()=> dispatch({type:"ABOUT_US" ,payload:600})}>
                            
                            درباره ما
                        </Link>
                    </li>
                    <li>
                        <Link to='#' onClick={()=> dispatch({type:"ABOUT_US" ,payload:1100})}>
                            آشپزها
                        </Link>
                    </li>
                    <li>
                        <Link to='#' onClick={()=> dispatch({type:"ABOUT_US" ,payload:1600})}>
                            منو غذا
                        </Link>
                    </li>
                    <li>
                        <Link to='#' onClick={()=> dispatch({type:"ABOUT_US" ,payload:4800})}>
                            نظرات
                        </Link>
                    </li>
                    <li>
                        <Link to='#' onClick={()=> dispatch({type:"ABOUT_US" ,payload:5150})}>
                            ارتباط با ما
                        </Link>
                    </li>
                </ul>

                {/* //hamberger Menu  */}

          

               
            <div className={Styles.menu_responsive}>
                <input  type="checkbox"   className={Styles.btn_hamberger} />
                    

               

                <nav className={Styles.hamberger_Menu} >
                    <ul >
                             <li>
                            <Link to='/ShoppingCart'>
                            <FaShoppingCart className={Styles.ShoppingIcon} />
                                 <h5 className={Styles.conterBasket}>
                                {foodBtnEvent.foodsCounter}
                                </h5>
                             </Link>
                             </li>
                         <li>
                            <Link to='#' onClick={()=> dispatch({type:"ABOUT_US" ,payload:600})}>
                            
                            درباره ما
                            </Link>
                        </li>
                        <li>
                            <Link to='#' onClick={()=> dispatch({type:"ABOUT_US" ,payload:1100})}>
                                آشپزها
                             </Link>
                        </li>
                        <li>
                             <Link to='#' onClick={()=> dispatch({type:"ABOUT_US" ,payload:1600})}>
                            منو غذا
                             </Link>
                        </li>
                        <li>
                            <Link to='#' onClick={()=> dispatch({type:"ABOUT_US" ,payload:4800})}>
                            نظرات
                             </Link>
                        </li>
                        <li>
                             <Link to='#' onClick={()=> dispatch({type:"ABOUT_US" ,payload:5150})}>
                            ارتباط با ما
                             </Link>
                        </li>
                        

                    </ul>
                </nav>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;
