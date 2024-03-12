function CartReducer(state:any , action:any){
    if(action.type === "ADD_To_Cart" ){
        let {id , price} = action.payload;
        console.log(id);
        
    }
    return state;
}
export default CartReducer;