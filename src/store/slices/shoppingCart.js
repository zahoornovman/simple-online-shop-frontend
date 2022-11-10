import { createSlice } from "@reduxjs/toolkit";

const shoppingSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        cartItems: [],
        numberOfItems: 0,
        totalValue: 0
    },
    reducers: {
        addItemToCart:  (state, action) => {
            console.log(action.payload);
            state.cartItems.push(action.payload);
        } ,
        increaseItems: state => {
            state.numberOfItems +=1;
        },
        increaseTotalValue: (state, action) => {
            console.log(action);
            state.totalValue += action.payload;
        },
        removeItem: (state, action) => {
            console.log(action)
            state.cartItems = state.cartItems.filter(obj => obj.id !== parseInt(action.payload) );
        },
        decreaseTotalValue: (state, action) => {
            console.log(action)
            state.totalValue -= action.payload
        },
        decreaseItems: state => {
            state.numberOfItems -= 1;
        }
    }
});

const setToCart = shoppingSlice.actions.addItemToCart;
const setIncreaseItems = shoppingSlice.actions.increaseItems;
const setTotalValueUp = shoppingSlice.actions.increaseTotalValue;
const setRemoveItem = shoppingSlice.actions.removeItem;
const setDecreaseItem = shoppingSlice.actions.decreaseItems;
const setDecreaseTotalValue = shoppingSlice.actions.decreaseTotalValue;
const reducer = shoppingSlice.reducer

export { setToCart, 
    setIncreaseItems,
    setTotalValueUp, 
    setRemoveItem,
    setDecreaseItem,
    setDecreaseTotalValue, 
    reducer } 