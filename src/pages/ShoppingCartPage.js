import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { selectShoppingCartItems, selectTotalAmount } from '../store/selectors'
     
import { setRemoveItem, setDecreaseItem, setDecreaseTotalValue, } from '../store/slices/shoppingCart'

import { useNavigate } from "react-router-dom";

import './shoppingCartPage.css'


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
        dispatch(setRemoveItem(event.target.id));
        dispatch(setDecreaseItem());
        dispatch(setDecreaseTotalValue(event.target.getAttribute('priceperunit')))
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
                                    <td><button onClick={handleRemoveItem} id={item.id} priceperunit={item.pricePerUnit} >Remove Item</button></td>
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