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


function Header(){

    const items = useSelector(selectNumberOfItems);

    const [showModal, setShowModal] = useState(false);

    function handleClick(){
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
                {/* <RequireAuth> */}
                {
                showModal && 
                 <RequireAuth>
                    <ShoppingCartModal handleClick = {handleClick} show = {showModal}/>
                 </RequireAuth>
                 }
                {/* </RequireAuth> */}
            </div>
        </div>
        
    )
}

export { Header }