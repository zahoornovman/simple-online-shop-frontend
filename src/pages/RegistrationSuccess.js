import { useNavigate } from 'react-router-dom'
import { Button } from "../component/StyleComponents/StyledButton";

export function RegistrationSuccess(){

    const navigate = useNavigate();


    return(
        <>
        <h3 color='blue'>Registration Success. Login to start shopping</h3>
        <Button type='primary' onClick= {()=> navigate('/login')} >Login</Button>
        </>
    )
}