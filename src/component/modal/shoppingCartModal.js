import React from "react";

import './styles.css'

import { useSelector } from "react-redux";

import { selectShoppingCartItems, selectTotalAmount } from '../../store/selectors'


export function ShoppingCartModal(props) {

    const shoppingCart = useSelector(selectShoppingCartItems);
    const totalAmount = useSelector(selectTotalAmount);
    //console.log(shoppingCart);

    return (
        <div className="shopping-cart-modal" onClick={props.handleClick}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">
                        Shopping Cart
                    </h4>
                </div>
                <div className="modal-body">
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price per Unit</td>
                                <td>Quantity</td>
                                <td>Discount</td>
                                <td>Final Price</td>
                                {/* <td>Remove Product</td> */}
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
                                    {/* <td><button>Remove Item</button></td> */}
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

                </div>
                <div className="modal-footer">
                    <button className="pay">Pay</button>
                    <button onClick={props.handleClick} >Go Back to Orders</button>
                </div>
            </div>
        </div>
    )

}

