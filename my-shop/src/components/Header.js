import React from "react";
//styles
import Styles from "./Hedar.module.css";

const Header = () => {
    return (
        <>
            <header className={Styles.Header}>
                <div className={Styles.headerTitle}>
                    <h1> بهترین طعم ها رو باید امتحان کنید :)</h1>
                </div>
            </header>
        </>
    );
};

export default Header;
