import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {} from "react-router-dom"
//styles
import Styles from "./ShoppingCart.module.css";
//img for 404 error
import ErrorNotFound from "../images/eroro404.png";
// useContext
import { FoodBtnContext } from "../context/CardContextProvider";
// helper function

import { quantityCount } from "../Helpers/quantityCont";
// food cart
import ShoppingFoodCart from "../components/ShoppingFoodCart";
import { notify } from "../Helpers/notify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShoppingCart = () => {
    // use the  contex

    // the reducer function
    const { foodBtnEvent, dispatch } = useContext(FoodBtnContext);

    const NotifyHandler = (e)=>{
        let getThedataSet= e.target.dataset.name;
        let condition=foodBtnEvent.selectedFood.length > 0;
        if(getThedataSet==="checkOut" && condition ){
            notify("به امید دیدار دوست عزیز :)", "success");
            dispatch({ type: "CHECKOUT" })
            
        }else if (getThedataSet==="clererAll" && condition){
            dispatch({ type: "CLEARALL" })
            notify("چی شد نخواستی :(", "error");

        }else{
            notify("هنوز که چیزی سفارش ندادی :(", "error");

        }

        
    }

    return (
        <>
            <div className={Styles.containerShppingCard}>
                <button className={Styles.back_home_btn}>
                    <Link to='/mainPage'> برگشت</Link>
                </button>

                <div className={Styles.CheckOutBox}>
                    <h2> سبد خرید شما </h2>
                    <h4>
                        تعداد سفارشات شما :
                        <span> {foodBtnEvent.foodsCounter} </span>
                    </h4>
                    <h4>
                        مجموع هزینه سفارشات شما :
                        <span>{foodBtnEvent.total / 1000} هزارتومن </span>
                    </h4>

                    <div className={Styles.boxBtn}>
                        
                        <button onClick={NotifyHandler} data-name="checkOut">
                            تسویه حساب
                        </button>

                        <button onClick={NotifyHandler} data-name="clererAll">
                            خالی کردن سبد خرید
                        </button>
                    </div>
                </div>

                <div className={Styles.foodCart}>
                    {foodBtnEvent.selectedFood.length ? (
                        foodBtnEvent.selectedFood.map((foodItem) => (
                            <ShoppingFoodCart
                                key={foodItem.id}
                                data={foodItem}
                            />
                        ))
                    ) : (
                        <>
                            <div className={Styles.tooltip}>
                                <img src={ErrorNotFound} alt='error 404 img' />
                                <span className={Styles.tooltiptext}>
                                    متاسفانه سبد خرید شما خالیه
                                </span>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <ToastContainer/>

        </>
    );
};

export default ShoppingCart;
