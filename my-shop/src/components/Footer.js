import React, { useState } from "react";
//styles
import Styles from "./Footer.module.css";

//form img
import formImg from "../images/slider-01.jpg";

const Footer = () => {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        subject: "",
        massage: "",
    });

    const changeHandler = (e) => {
        setInputData(([e.target.name] = [e.target.value]));
    };
    return (
        <div className={Styles.contianer_form}>
            <div className={Styles.footerImg}>
                <img src={formImg} alt='form img' />
            </div>
            <div className={Styles.form}>
                <form>
                    <input
                        value={inputData.name}
                        onChange={changeHandler}
                        name='name'
                        placeholder='نام شما'
                        type='text'
                    />
                    <input
                        value={inputData.email}
                        onChange={changeHandler}
                        name='email'
                        placeholder='ایمیل شما'
                        type='email'
                    />
                    <input
                        value={inputData.subject}
                        onChange={changeHandler}
                        name='subject'
                        placeholder='موضوع'
                        type='text'
                    />
                    <textarea
                        value={inputData.massage}
                        onChange={changeHandler}
                        name='massage'
                        placeholder=' پیام مورد نظر'
                        type='text'
                    />
                    <button type='submit'>ارسال پیام</button>
                </form>
            </div>
        </div>
    );
};

export default Footer;
