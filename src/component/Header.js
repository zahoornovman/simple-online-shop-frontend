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


function Header(){

    const items = useSelector(selectNumberOfItems);

    const [showModal, setShowModal] = useState(false);

    function handleClick(){
        console.log('enteringhandleClick')
        setShowModal(!showModal);
    }


    return (
        <div className="header">
            <div className='nameAndLogo'>
                <img className= 'website-logo' src={ Logo }/>
                <h4>My Cool Tshirts</h4>
            </div>
            <div className='shopping-cart'>
                <div>{items}</div>
                <img onClick={handleClick} className='shopping-cart-img' src = { Cart }/>
                {showModal && <ShoppingCartModal handleClick = {handleClick} show = {showModal}/> }
            </div>
        </div>
        
    )
}

export { Header }