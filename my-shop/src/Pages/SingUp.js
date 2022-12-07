import React, { useEffect, useState } from "react";
// styles
import Styles from "./SingUp.module.css";
//Router Dom
import { Link, useNavigate } from "react-router-dom";
// validate function
import { ValidateForm } from "../Helpers/ValidateForm";

/// alert
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../Helpers/notify";

const SingUp = () => {
    // data of input
    const [input, setInput] = useState({
        userName: "",
        email: "",
        passwrod: "",
        confirmPasswrod: "",
        accpetPolciy: false,
    });

    //sent the sdtudent to main page of unvercity site

    const Navigate = useNavigate();
 
    // const RedirectToMainPage = () => {
    //     sentUser("/mainPage", { replace: true });
    // };
    // ChanengHandler for input
    const ChanengHandler = (e) => {
        if (e.target.name === "accpetPolciy") {
            setInput({ ...input, [e.target.name]: e.target.checked });
        } else {
            setInput({ ...input, [e.target.name]: e.target.value });
        }
    };

    // show error message
    const [error, setError] = useState({});
    //set Error
    useEffect(() => {
        setError(ValidateForm(input, "login"));
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
                confirmPasswrod: true,
                userName: true,
                accpetPolciy: true,
            });
          
            setTimeout(() => {
                
                document.location.reload()
            }, 1500);
        }
    };

    return (
        <>
            <section className={Styles.container}>
                <form onSubmit={submitHandler} className={Styles.form}>
                    <h2> SingUp</h2>

                    <label> UserName :</label>
                    <input
                        
                        type='text'
                        value={input.userName}
                        onChange={ChanengHandler}
                        onBlur={blurHandler}
                        name='userName'
                    />
                    {error.userName && blur.userName && (
                        <h6> {error.userName} </h6>
                    )}
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
                    {error.passwrod && blur.passwrod && (
                        <h6> {error.passwrod} </h6>
                    )}

                    <label> CofirmPasswrod :</label>

                    <input
                        type='password'
                        value={input.confirmPasswrod}
                        onChange={ChanengHandler}
                        onBlur={blurHandler}
                        name='confirmPasswrod'
                    />
                    {error.confirmPasswrod && blur.confirmPasswrod && (
                        <h6> {error.confirmPasswrod} </h6>
                    )}

                    <div>
                        <input
                            style={{
                                display: "inline",
                                width: "25px",
                                height: "15px",
                            }}
                            value={input.accpetPolciy}
                            type='checkbox'
                            onChange={ChanengHandler}
                            onBlur={blurHandler}
                            name='accpetPolciy'
                        />
                        <span> please agree with our Policy </span>
                        {error.accpetPolciy && blur.accpetPolciy && (
                            <h6> {error.accpetPolciy} </h6>
                        )}
                    </div>
                    <div className={Styles.containerBtn}>
                        <button className={Styles.singUpBtn} type='submit'>singUp</button>
                        <button  className={Styles.loginBtn} type='button'>
                            <Link to='/login'> Login </Link>
                        </button>
                    </div>
           
                </form>
                <ToastContainer/>
            </section>
        </>
    );
};

export default SingUp;
