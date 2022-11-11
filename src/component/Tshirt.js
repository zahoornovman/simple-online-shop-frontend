//svg
import Cart from '../assets/cart.svg';

//css
import './tShirt.css';

import { useDispatch } from 'react-redux';

import { useState } from 'react';

import { setToCart, setIncreaseNumberOfItems, setTotalValueUp } from '../store/slices/shoppingCart'

export  function Tshirt(props){

    const dispatch = useDispatch();

    // const [name, setName] = useState('');
    // const [pricePerUnit, setPricePerUnit] = useState();
    // const [quantity, setQuantity] = useState(0);
    // const [discount, setDiscount] = useState('');
    // const [finalPrice, setFinalPrice] = useState(0);

    const handleAddToCart = (event) =>{

        //console.log(event);
        const name= props.tshirt.name;
        const pricePerUnit = props.tshirt.price;
        const quantity = 1; // need to update this when implementation for quantiy is added
        const discount = props.tshirt.discount;
        const finalPrice = pricePerUnit;
        const id = props.tshirt.id;
        //console.log(id, name, pricePerUnit, quantity, discount, finalPrice)
        let action = { id, name, pricePerUnit, quantity, discount, finalPrice }
        dispatch(setToCart(action));
        dispatch(setIncreaseNumberOfItems(1));
        dispatch(setTotalValueUp(finalPrice));
    }

    return (
        <div className="each-tshirt">
            <h4>{props.tshirt.name}</h4>
            <img className = 'tshirt-img'src={props.tshirt.url} alt={props.name}/>
            <div className='priceAndCart'>               
                <span>Price: {props.tshirt.price} </span>
                <img onClick={handleAddToCart} id = {props.tshirt.id} className='cart' src={Cart}/>
            </div>
        </div>
    )

}