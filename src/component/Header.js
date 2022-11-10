//svgs
import Logo from '../assets/logo.svg'
import Cart from '../assets/cart.svg'

//css
import './header.css'

//selectors
import { selectNumberOfItems } from '../store/selectors'

//react-redux methods
import { useSelector } from 'react-redux'

import { useState } from 'react'

//modal
import { ShoppingCartModal } from './modal/shoppingCartModal'

import { RequireAuth } from './RequireAuth';

import { useNavigate } from "react-router-dom";


function Header(){

    const items = useSelector(selectNumberOfItems);
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);

    function handleClick(){
        setShowModal(!showModal);
    }


    return (
        <div className="header">
            <div className='nameAndLogo'>
                <img className= 'website-logo' onClick={() => navigate('/')} src={ Logo }/>
                <h1 id='website-name'>My Cool Tshirts</h1>
            </div>
            <div className='shopping-cart-info'>
                <div>{items}</div>
                <img onClick={()=> navigate('/shoppingCart')} className='shopping-cart-img' src = { Cart }/>
            </div>
        </div>
        
    )
}

export { Header }