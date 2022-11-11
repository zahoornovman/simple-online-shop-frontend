//libraries
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//selectors
import { selectShoppingCartItems, selectTotalAmount } from '../store/selectors'
     
//reducers
import { setRemoveItemFromCart, setDecreaseQuantity, setDecreaseNumberOfItem, setDecreaseTotalValue } from '../store/slices/shoppingCart'
import {setIncreaseNumberOfItems, setIncreaseQuantity, setToCart, setTotalValueUp } from '../store/slices/shoppingCart'


//css
import './shoppingCartPage.css'

//svg
import  Trash  from '../assets/trash.svg'
import Increase from '../assets/plus.svg'
import Decrease from '../assets/minus.svg'


export function ShoppingCart() {

    const shoppingCart = useSelector(selectShoppingCartItems);
    const totalAmount = useSelector(selectTotalAmount);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const length = shoppingCart.length;
    console.log(length)

    const handleRemoveItem = (event) => {
        //console.log(event.target.id)
        //console.log(event.target.getAttribute('priceperunit'))
        dispatch(setRemoveItemFromCart(event.target.id));
        dispatch(setDecreaseNumberOfItem(event.target.getAttribute('quantity')));
        const value = event.target.getAttribute('quantity')*event.target.getAttribute('priceperunit');
        dispatch(setDecreaseTotalValue(value))
    }

    const handleDecrease = (event) => {
        dispatch(setDecreaseQuantity(event.target.id));
        dispatch(setDecreaseNumberOfItem(1));
        dispatch(setDecreaseTotalValue(event.target.getAttribute('priceperunit')))
    }

    const handleIncrease = event => {

        dispatch(setIncreaseQuantity(event.target.id));
        dispatch(setIncreaseNumberOfItems(1));
        dispatch(setTotalValueUp(event.target.getAttribute('priceperunit')));

    }

    return (
        <div className="shopping-cart" >
                <div className="shopping-cart-header">
                    <h4 className="shopping-cart-title">
                        Your Shopping Cart
                    </h4>
                </div>
                <div className="body">
                    {length !== 0 ?
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price per Unit</td>
                                <td>Quantity</td>
                                <td>Discount</td>
                                <td>Final Price</td>
                                <td>Change Quantity</td>
                                <td>Delete Item</td>                              
                            </tr>
                        </thead>
                        <tbody>
                            {shoppingCart.map(item => 
                                <tr>                                   
                                    <td>{item.name}</td>
                                    <td>{item.pricePerUnit}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.discount}</td>
                                    <td>{item.finalPrice}</td>
                                    <td>
                                        <img
                                            className="increase-decrease-icons"
                                            src = { Increase }
                                            onClick={handleIncrease} 
                                            id={item.id} 
                                            priceperunit={item.pricePerUnit}                                     
                                        />
                                        <img
                                            className="increase-decrease-icons"
                                            src = { Decrease }
                                            onClick={handleDecrease} 
                                            id={item.id} 
                                            priceperunit={item.pricePerUnit}                                       
                                        />
                                    </td>
                                    <td>
                                        <img
                                            className="remove-item" 
                                            src={Trash}
                                            onClick={handleRemoveItem} 
                                            id={item.id} 
                                            quantity = {item.quantity}
                                            priceperunit={item.pricePerUnit}                                           
                                        />
                                    </td>
                                    
                                </tr>
                            )}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={4}> Total Price</td>
                                <td>{totalAmount}</td>
                            </tr>
                        </tfoot>                       
                    </table>
                    :
                    <div>Your cart is empty</div>}
                </div>
                <div className="footer">
                    { (length !== 0) && <button className="pay">Pay</button>}
                    <button onClick={()=> navigate('/')} >Go Back to Shopping</button>
                </div>
        </div>
    )

}