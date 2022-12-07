
/// alert
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../Helpers/notify";

// export default Login;

import React, { useEffect, useState } from "react";
// styles
import Styles from "./SingUp.module.css";
//Router Dom
import { Link, useNavigate } from "react-router-dom";
// validate function
import { ValidateForm } from "../Helpers/ValidateForm";

const Login = () => {
    // data of input
    const [input, setInput] = useState({
        email: "",
        passwrod: "",
    });

    //sent the sdtudent to main page of unvercity site

    const Navigate = useNavigate();
    // const RedirectToMainPage = () => {
    //     sentUser("/mainPage", { replace: true });
    // };
    // ChanengHandler for input
    const ChanengHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    // show error message
    const [error, setError] = useState({});
    //set Error
    useEffect(() => {
        setError(ValidateForm(input));
    }, [input]);

    //blur handler
    //this code for know is user on wich one input then , show the error message
    const [blur, setBlur] = useState({});
    const blurHandler = (e) => {
        setBlur({ ...blur, [e.target.name]: true });
    };
    // submit handler
    const submitHandler = (e) => {
        e.preventDefault();
        if (!Object.keys(error).length) {
            notify("بسیار هم عالی برو بریم", "success");
            setTimeout(() => {
                
                Navigate("/mainPage",{replace:true});
            }, 1500);
            
        } else {
            notify("یه مشکلی هست متاسفانه :(", "error");


            setBlur({
                email: true,
                passwrod: true,
            });
            setTimeout(() => {
                
                document.location.reload()
            }, 1500);
            

        }
    };

    return (
        <section className={Styles.container}>
            <form onSubmit={submitHandler} className={Styles.form}>
                <h2> Login</h2>

                <label> Email :</label>

                <input
                   
                    type='email'
                    value={input.email}
                    onChange={ChanengHandler}
                    onBlur={blurHandler}
                    name='email'
                />
                {error.email && blur.email && <h6> {error.email} </h6>}

                <label> Passwrod :</label>

                <input
                    type='password'
                    value={input.passwrod}
                    onChange={ChanengHandler}
                    onBlur={blurHandler}
                    name='passwrod'
                />
                {error.passwrod && blur.passwrod && <h6> {error.passwrod} </h6>}

                <div className={Styles.containerBtn}>
                    <button type='submit'>Login</button>
                    <button type='button'>
                        <Link to='/'> SingUp </Link>
                    </button>
                </div>
            </form>
            <ToastContainer/>
        </section>
    );
};

export default Login;
