import React, { useContext } from "react";
//styles
import Styles from "./food.Card.module.css";
//context

import { FoodBtnContext } from "../context/CardContextProvider";
/// helpers 

import { isInCard } from "../Helpers/isInCard";
import { quantityCount } from "../Helpers/quantityCont";
import { showQuantity } from "../Helpers/showQuantity";


const FoodCard = ({ foodData }) => {
    const { foodName, price, pic, id } = foodData;
    //data of shopingBasket (reducner) for useahing and handling btn event
    const {foodBtnEvent,dispatch} = useContext(FoodBtnContext);
        

   
  
    return (
        <div className={Styles.container_cardFood}>
            <img src={pic} className={Styles.foodImg} alt=' food_img' />

            <div className={Styles.container_orderFood}>
                <div className={Styles.foodInfo}>
                    <h4> {price} T</h4>
                    <h5>{foodName}</h5>
                  
                </div>
                <div className={Styles.boxBtn}>
                    {
                        quantityCount(foodBtnEvent,id) > 1 &&  <button onClick={()=> dispatch({type:"DECRASE" ,payload:foodData}) }> - </button>
                        
                        
                    }
                    {
                        quantityCount(foodBtnEvent,id) === 1 &&  <button onClick={()=> dispatch({type:"Remove_Food" ,payload:foodData}) }> نمیخام </button>

                    }

                        { showQuantity(foodBtnEvent, id) &&  <span>{showQuantity(foodBtnEvent, id)} </span> }
               

                    {
                        isInCard(foodBtnEvent,id) ?
                        <button onClick={()=> dispatch({type:"INCRASE" ,payload:foodData}) }> + </button>
                        : <button onClick={()=> dispatch({type:"ADD_FOOD" ,payload:foodData}) }> میخام </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
