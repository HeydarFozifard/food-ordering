export const isInCard  =(state , id) =>{
    const result= !!state.selectedFood.find(foodItem => foodItem.id === id);

    return result
}

