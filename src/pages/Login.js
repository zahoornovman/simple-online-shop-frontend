import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import { loginUser } from '../store/slices/loginUser'
import { useDispatch } from 'react-redux'

import './login.css'


function Login() {

    const navigate = useNavigate();
    const dispach = useDispatch();
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispach(loginUser({ email, password }));
        navigate('/')
    };

    return (
        <div className="login-page">
            <div className="login-img">
                <img src="https://retroshirtz.com/wp-content/uploads/2018/04/Custom-Womens-Shirts.jpg" alt="" />
            </div>
            <div className="login-information">
                <div className="login-details">
                    <h2>Login</h2>
                    <form className= 'login-form' onSubmit={handleSubmit}>
    
                        <input type='text' 
                        placeholder='Email' 
                        value={email} 
                        onChange={e => setEmail(e.currentTarget.value) } />

                        <input type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={e => setPassword(e.currentTarget.value)} />
    
                        <button id="login-button" type="submit">Login</button>

                    </form>
                </div>
                <div className="newUser-registration">
                    <span>New to the Website? Sign up: </span>
                    <button onClick={()=> navigate('/registerNewUser')}>
                        Register to get your T-shirts!
                    </button>
                </div>
            </div>            
        </div>
    )
}

export { Login }