import { useNavigate } from 'react-router-dom'

export function RegistrationSuccess(){

    const navigate = useNavigate();
    return(
        <>
        <h3>Registration Success. Login to start shopping</h3>
        <button onClick={() => navigate('/login')}>Login</button>
        </>
    )
}