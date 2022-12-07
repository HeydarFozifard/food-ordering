export const showQuantity=(foodItem,cardId)=>{

    let quantityFood;

    foodItem.selectedFood.forEach((food) => {
        if (food.id === cardId) {
             quantityFood= food.quantity;
        }
    })

    if(quantityFood >0){
        return quantityFood
    }
}