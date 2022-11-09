//svg
import Cart from '../assets/cart.svg';

//css
import './tShirt.css';

import { useDispatch } from 'react-redux';

import { useState } from 'react';

import { setToCart, setIncreaseItems, setTotalValueUp } from '../store/slices/shoppingCart'

export  function Tshirt(props){

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [pricePerUnit, setPricePerUnit] = useState();
    const [quantity, setQuantity] = useState(0);
    const [discount, setDiscount] = useState('');
    const [finalPrice, setFinalPrice] = useState(0);

    const handleAddToCart = (event) =>{

        console.log(event);
        const name= props.tshirt.name;
        const pricePerUnit = props.tshirt.price;
        const quantity = 1; // need to update this when implementation for quantiy is added
        const discount = props.tshirt.discount;
        const finalPrice = pricePerUnit;
        console.log(name, pricePerUnit, quantity, discount, finalPrice)
        let action = { name, pricePerUnit, quantity, discount, finalPrice }
        dispatch(setToCart(action));
        dispatch(setIncreaseItems());
        dispatch(setTotalValueUp(finalPrice));
    }

    return (
        <div className="each-tshirt">
            <h6>{props.tshirt.name}</h6>
            <img className = 'tshirt-img'src={props.tshirt.url} alt={props.name}/>
            <div className='priceAndCart'>               
                <span>Price: {props.tshirt.price} </span>
                <img onClick={handleAddToCart} id = {props.tshirt.id} className='cart' src={Cart}/>
            </div>
        </div>
    )



}