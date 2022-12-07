import React, { useEffect, useState } from "react";

//import styles
import Styles from "./Menu.module.css";
// use context
import { useContext } from "react";
import { MenuDataContext } from "../context/FoodApiContext";
//food card
import FoodCard from "./foodCard";
//add loading img
import LoadingImg from "../images/Infinity-1s-200px.gif"

const Menu = () => {
    const menuData = useContext(MenuDataContext);

    
   
    return (
        <>
            <div>
                <h2 className={Styles.menuTilte}>
                    <span className={Styles.icon}></span>
                    منو غذا و نوشیدنی ها
                    <span className={Styles.icon}></span>
                </h2>
            </div>

            <div className={Styles.container_menu}>
                {menuData.length ? (
                    menuData.map((food) => (
                        <FoodCard key={food.foodName} foodData={food} />
                    ))
                    ) : (
                        <>
                        <img src={LoadingImg} alt="loading img"/>
                        </>
                )}
            </div>
        </>
    );
};

export default Menu;
