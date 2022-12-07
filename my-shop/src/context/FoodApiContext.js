import React, { useEffect, useState } from "react";

// data from api
import { foodData } from "../Api/foodData";
//axios
import { createContext } from "react";

export const MenuDataContext = createContext();

const FoodApiContext = ({ children }) => {
    const [menuData, SetMenuData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            return SetMenuData(await foodData());
        };
        fetchApi();
    }, []);

    return (
        <>
            <MenuDataContext.Provider value={menuData}>
                {children}
            </MenuDataContext.Provider>
        </>
    );
};

export default FoodApiContext;
