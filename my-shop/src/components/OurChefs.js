import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
//styles
import Styles from "./Our.Chefs.module.css";

// context
import { useContext } from "react";
import { ChefInfoDataContext } from "../context/chefInfoContext";
import CardChef from "./cardChef";
//add loading img
import LoadingImg from "../images/Infinity-1s-200px.gif";


const OurChefs = () => {
    const chefData = useContext(ChefInfoDataContext);
    return (
        <>
            <div className={Styles.Container_chefs}>
                <div className={Styles.contianer_title}>
                    <span className={Styles.icon}></span>
                    <h1 className={Styles.chefTitle}> سرآشپز های مجموعه </h1>
                    <span className={Styles.icon}></span>
                </div>
                <div className={Styles.Container_chefs_box}>
                    {chefData.length ? (
                        chefData.map((data) => (
                            <div className={Styles.tooltip}>
                                
                                <CardChef key={data.id} ChefData={data} />
                                <span className={Styles.tooltiptext}>
                                    با مــن بیشتر آشنا بشید :)
                                </span>
                            </div>
                        ))
                    ) : (
                        <>
                            <img src={LoadingImg} alt='loading img' />
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default OurChefs;
