import { createSlice } from "@reduxjs/toolkit";

const shoppingSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        cartItems: [{
            name: '',
            pricePerUnit: 0,
            quantity: 0,
            discount: '',
            finalPrice: 0
        }],
        numberOfItems: 0,
        totalValue: 0
    },
    reducers: {
        addItemToCart:  (state, action) => {
            console.log(action.payload);
            state.cartItems.push(action.payload);
            // state.numberOfItems += 1;
        } ,
        increaseItems: state => {
            state.numberOfItems +=1;
        },
        increaseTotalValue: (state, action) => {
            console.log(action);
            state.totalValue += action.payload;
        }
    }
});

const setToCart = shoppingSlice.actions.addItemToCart;
const setIncreaseItems = shoppingSlice.actions.increaseItems;
const setTotalValueUp = shoppingSlice.actions.increaseTotalValue;
const reducer = shoppingSlice.reducer

export { setToCart, setIncreaseItems, setTotalValueUp, reducer } 