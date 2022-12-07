import React, { useState, useEffect } from "react";
//import the context
import { createContext } from "react";
// import the data that you get it from api
import { ChefInfoData } from "../Api/ChefInfoData";
// create contecxt
export const ChefInfoDataContext = createContext();

const ChefInfoContext = ({ children }) => {
    const [chefData, SefChefData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            return SefChefData(await ChefInfoData());
        };
        fetchApi();
    }, []);
    return (
        <>
            <ChefInfoDataContext.Provider value={chefData}>
                {children}
            </ChefInfoDataContext.Provider>
        </>
    );
};

export default ChefInfoContext;
