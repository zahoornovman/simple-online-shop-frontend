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
            const objAlreadyExists = state.cartItems.some(obj => obj.id === action.payload.id)
            if (objAlreadyExists) {
                //payload contains the following: (id, name, pricePerUnit, quantity, discount, finalPrice)
                const tempCartItems = state.cartItems
                const index = tempCartItems.findIndex(obj => {
                    return obj.id === action.payload.id
                })
                if (index !== -1){
                    tempCartItems[index].quantity += 1;
                    tempCartItems[index].finalPrice = tempCartItems[index].pricePerUnit*tempCartItems[index].quantity
                }
                state.cartItems = tempCartItems;

            } else{
                state.cartItems.push(action.payload)
            }
        } ,
        increaseQuantity:  (state, action) => {
            const itemId = parseInt(action.payload)
            const objAlreadyExists = state.cartItems.some(obj => obj.id === itemId)
            if (objAlreadyExists) {
                const tempCartItems = state.cartItems
                const index = tempCartItems.findIndex(obj => {
                    return obj.id === itemId
                })
                if (index !== -1){
                    tempCartItems[index].quantity += 1;
                    tempCartItems[index].finalPrice = tempCartItems[index].pricePerUnit*tempCartItems[index].quantity
                }
                state.cartItems = tempCartItems;
            } else {
                console.log('Item not found in state')
            }
        } ,
        increaseNumberOfItems: (state, action) => {
            state.numberOfItems +=action.payload;
        },
        increaseTotalValue: (state, action) => {
            state.totalValue += parseInt(action.payload);
        },
        removeItemFromCart: (state, action) => {          
                state.cartItems = state.cartItems.filter(obj => obj.id !== parseInt(action.payload) );
        },
        decreaseQuantity: (state, action) => {
            const itemId = action.payload
            const tempCartItems = state.cartItems;
            const index = tempCartItems.findIndex(obj => {
                return obj.id == itemId
            })
            
            if (tempCartItems[index].quantity > 1){            
                tempCartItems[index].quantity -= 1;
                tempCartItems[index].finalPrice = tempCartItems[index].pricePerUnit*tempCartItems[index].quantity             
                state.cartItems = tempCartItems;

            } else {           
                state.cartItems = state.cartItems.filter(obj => obj.id !== parseInt(action.payload) );
            }
        },
        decreaseTotalValue: (state, action) => {
            state.totalValue -= action.payload
        },
        decreaseNumberOfItems: (state, action)=> {
            state.numberOfItems -= action.payload
        }
    }
});

const setToCart = shoppingSlice.actions.addItemToCart;
const setIncreaseQuantity = shoppingSlice.actions.increaseQuantity;
const setIncreaseNumberOfItems = shoppingSlice.actions.increaseNumberOfItems;
const setTotalValueUp = shoppingSlice.actions.increaseTotalValue;
const setRemoveItemFromCart = shoppingSlice.actions.removeItemFromCart;
const setDecreaseQuantity = shoppingSlice.actions.decreaseQuantity;
const setDecreaseNumberOfItem = shoppingSlice.actions.decreaseNumberOfItems;
const setDecreaseTotalValue = shoppingSlice.actions.decreaseTotalValue;
const reducer = shoppingSlice.reducer

export { setToCart, 
    setIncreaseQuantity,
    setIncreaseNumberOfItems,
    setTotalValueUp, 
    setRemoveItemFromCart,
    setDecreaseQuantity,
    setDecreaseNumberOfItem,
    setDecreaseTotalValue, 
    reducer } 