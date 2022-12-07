import { ClassNames } from "@emotion/react";
import React from "react";
//react icon
import { BsFillArrowUpCircleFill } from "react-icons/bs";
//import styles
import Styles from "./BackToTopBtn.module.css";

const BackToTopBtn = () => {

    const goToUpHandler = ()=>{
        document.documentElement.scrollTop = 0;
    }

    return (
        <div>
            <button onClick={goToUpHandler} className={Styles.BackToTopBtn}>
            <BsFillArrowUpCircleFill />
            </button>

        </div>
    );
};

export default BackToTopBtn;
