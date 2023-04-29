import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import { loginUser } from '../../store/slices/loginUser'
import { useDispatch } from 'react-redux'

import './login.css'
import { StyledForm } from "../../component/StyleComponents/StyledForm";
import { Button } from "../../component/StyleComponents/StyledButton";
import { StyledLogin } from "./styles";


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

        
        <StyledLogin>
            <div className="login-img">
                <img src="https://retroshirtz.com/wp-content/uploads/2018/04/Custom-Womens-Shirts.jpg" alt="" />
            </div>
            <div className="login-information">
                <div className="login-details">
                    
                    <StyledForm onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='email'>Email:</label>
                            <input type='text' 
                            name="email" 
                            value={email} 
                            onChange={e => setEmail(e.currentTarget.value) } />
                        </div>
                        <div>
                            <label htmlFor='password'>Password:</label>
                            <input type="password" 
                            name="password" 
                            value={password} 
                            onChange={e => setPassword(e.currentTarget.value)} />
                        </div>
                        <Button type="primary">Login</Button>

                    </StyledForm>
                </div>
                <div className="newUser-registration">
                    <span>New to the Website? Sign up: </span>
                    <Button type='secondary'onClick={()=> navigate('/registerNewUser')}>
                        Register to get your T-shirts!
                    </Button>
                </div>
            </div> 
        </StyledLogin>           
        
    )
}

export { Login }