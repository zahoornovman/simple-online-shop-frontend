//svgs
import Logo from '../assets/logo.svg'
import Cart from '../assets/cart.svg'

//css
import './header.css'

//selectors
import { selectNumberOfItems } from '../store/selectors'

//react-redux methods
import { useSelector } from 'react-redux'


function Header(){

    const items = useSelector(selectNumberOfItems);


    return (
        <div className="header">
            <div className='nameAndLogo'>
                <img className= 'website-logo' src={ Logo }/>
                <h4>My Cool Tshirts</h4>
            </div>
            <div className='shopping-cart'>
                <div>{items}</div>
                <img className='shopping-cart-img' src = { Cart }/>
            </div>
        </div>
        
    )
}

export { Header }