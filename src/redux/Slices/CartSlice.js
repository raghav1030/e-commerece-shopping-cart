import { createSlice } from "@reduxjs/toolkit"


export const CartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        add : (state , action)=>{
            state.push(action.payload)
        },
        remove : (state, action)=>{
            return state.filter(((product) => product.id !== action.payload ))
        },
        
    }
});

export const {add , remove , checkout} = CartSlice.actions;
export default CartSlice.reducer;