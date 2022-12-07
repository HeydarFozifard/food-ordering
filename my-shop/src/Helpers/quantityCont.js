export const quantityCount= (state , id)=>{

    const index=state.selectedFood.findIndex(item => item.id === id);

    if(index === -1){
        return false

    }else{
        return state.selectedFood[index].quantity;
    }
}