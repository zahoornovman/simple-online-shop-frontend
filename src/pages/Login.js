import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import { loginUser } from '../store/slices/loginUser'
import { useDispatch } from 'react-redux'


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
        //navigate(from, { replace: true });
        navigate('/')
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' 
                placeholder='Email' 
                value={email} 
                onChange={e => setEmail(e.currentTarget.value) } />
                <input type="password" 
                placeholder="Password" 
                value={password} 
                onChange={e => setPassword(e.currentTarget.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export { Login }