import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectValidationUser } from '../store/selectors'

export function RegistrationFailure(){

    const validationError = useSelector(selectValidationUser)

    const navigate = useNavigate();
    return(
        <>
        <h3>Registration Not Successful.</h3>
        <h3>{validationError.errorUserName}</h3>
        <h3>{validationError.errorCode}</h3>
        <button onClick={() => navigate('/login')}>Login</button>
        </>
    )
}