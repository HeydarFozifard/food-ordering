import React, { useReducer, useContext, createContext } from "react";
import FoodCard from "../components/foodCard";
//سبد خرید
const initialState = {
    selectedFood: [],
    //total of food selected by user
    foodsCounter: 0,
    //total price of food
    total: 0,
    //is the users pay the money for food or not
    checkout: false,
};

//

const sumItems = (item) => {
    //fooditem in above is one of the eache object in foodbasket
    const foodsCounter = item.reduce(
        (total, foodItem) => total + foodItem.quantity,
        0
    );
    // total price

    const total = item
        .reduce(
            (total, foodItem) => total + foodItem.price * foodItem.quantity,
            0
        )
        .toFixed(2);

    return { foodsCounter, total };
};

const cartReducer = (state, action) => {
    switch (action.type) {
        //add a food for first time to basketshop
        case "ADD_FOOD":
            // بررسی میکنی ایا این محصول از قبل در سبد خرید بوده یا ن
            if (
                !state.selectedFood.find(
                    (item) => item.id === action.payload.id
                )
            ) {
                //حالا که نبوده بیا و محصول رو به سبد خرید اضافه کن
                //new object
                state.selectedFood.push({
                    //ریختن ابجکت و دیتادرون ان در سبد خرید
                    ...action.payload,
                    // تعداد
                    quantity: 1,
                    //
                });
            }
            return {
                //save the data
                ...state,
                //marging the new object of food on prve data
                selectedFood: [...state.selectedFood],
                // update to baskete
                // when we use the spreaed oprateor we means marge just the value //
                ...sumItems(state.selectedFood),
            };
        case "Remove_Food":
            //میگه اون محصولی که کاربر میخاد حذف کنه ایدیش رو بگیر از سبد حذف کن یا اون نباشه بقیه اش بده بهم
            const newFoodItems = state.selectedFood.filter(
                (item) => item.id !== action.payload.id
            );
            return {
                ...state,
                selectedFood: [...newFoodItems],
                ...sumItems(newFoodItems),
            };

        case "INCRASE":
            const indexI = state.selectedFood.findIndex(
                (index) => index.id === action.payload.id
            );
            state.selectedFood[indexI].quantity++;
            return {
                ...state,
                ...sumItems(state.selectedFood),
            };

        case "DECRASE":
            const indexD = state.selectedFood.findIndex(
                (indexD) => indexD.id === action.payload.id
            );
            state.selectedFood[indexD].quantity--;
            return {
                ...state,
                ...sumItems(state.selectedFood),
            };

        case "CHECKOUT":
            return {
                selectedFood: [],
                foodsCounter: 0,
                total: 0,
                checkout: true,
            };

        case "CLEARALL":
            return {
                selectedFood: [],
                foodsCounter: 0,
                total: 0,
                checkout: false,
            };

        default:
            return state;
    }
};

export const FoodBtnContext = createContext();

const CardContextProvider = ({ children }) => {
    const [foodBtnEvent, dispatch] = useReducer(cartReducer, initialState);

    return (
        <FoodBtnContext.Provider value={{ foodBtnEvent, dispatch }}>
            {children}
        </FoodBtnContext.Provider>
    );
};

export default CardContextProvider;
