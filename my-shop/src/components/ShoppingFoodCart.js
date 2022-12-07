import React, { useContext, useState } from "react";
//styles
import Styles from "./ShoppingFoodCart.module.css";
// context
import { FoodBtnContext } from "../context/CardContextProvider";
//helpers
import { showQuantity } from "../Helpers/showQuantity";
import { isInCard } from "../Helpers/isInCard";
import { quantityCount } from "../Helpers/quantityCont";


const ShoppingFoodCart = ({ data }) => {
    const { foodName, price, pic, id } = data;

    const { foodBtnEvent, dispatch } = useContext(FoodBtnContext);


    return (
        <div className={Styles.continaerFoodCart}>
            <div className={Styles.img_basketShop}>
                <img 
                    src={pic}
                    alt='food_img'
                />
            </div>
                
            <div className={Styles.infoFood}>
                <h2>{foodName}</h2>
                <h3>{price} تومان</h3>
            </div>

            <div>
            <div className={Styles.boxBtn}>
                    {
                        quantityCount(foodBtnEvent,id) > 1 &&  <button onClick={()=> dispatch({type:"DECRASE" ,payload:data}) }> - </button>
                        
                        
                    }
                    {
                        quantityCount(foodBtnEvent,id) === 1 &&  <button onClick={()=> dispatch({type:"Remove_Food" ,payload:data}) }> نمیخام </button>

                    }
                        <span>{showQuantity(foodBtnEvent, id)}</span>
                    {
                        isInCard(foodBtnEvent,id) ?
                        <button onClick={()=> dispatch({type:"INCRASE" ,payload:data}) }> + </button>
                        : <button onClick={()=> dispatch({type:"ADD_FOOD" ,payload:data}) }> میخام </button>
                    }
                </div>
               
            </div>

           
        </div>
    );
};

export default ShoppingFoodCart;
