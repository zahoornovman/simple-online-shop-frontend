import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../component/StyleComponents/StyledButton";
import { StyledForm} from "../component/StyleComponents/StyledForm";
import { StyledRegistration } from '../component/StyleComponents/StyledRegistration';
import { selectRegisterUser, selectValidationUser } from '../store/selectors';

import { newUserInfoValidation } from "../store/slices/newUserValidation";

export function RegistrationValidation() {

    //write function to check if password and password repeat are the same


    const registerUser = useSelector(selectRegisterUser);
    const userValidation = useSelector(selectValidationUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [password_repeat, setPasswordRepeat] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");

    if (registerUser.loading === 'null') {
        return <></>
    }

    if (registerUser.loading === 'loading'){
        return <h3>Please wait.... Loading...</h3>
    }

    if (registerUser.loading === 'Error Loading'){
        console.log(registerUser)
        return (
            <>
            <h2>Error in Registration</h2>
            <h3>{registerUser.error} </h3>
            </>
        )
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        console.log(registerUser)
        const email = registerUser.email
        const payload = { email, username, code, password, password_repeat, first_name, last_name}
        dispatch(newUserInfoValidation(payload))
        if (userValidation.status === 'status error') {

            navigate('/registration/validation/error')

        } else {
            navigate('/registration/validation/success')
        }
    }

    return (
        <StyledRegistration>
            <StyledForm onSubmit={handleOnSubmit}>
            <h2>Enter more details to update user information & activate user: </h2>
                <div>
                <label htmlFor="user-name"> Username : </label>
                    <input name="user-name" type="text" 
                    value={username}
                    onChange={e => setUsername(e.currentTarget.value)} />
                
                </div>
                <div>
                <label htmlFor ='code'> Code : </label>
                    <input name='code' type="text"  
                    value={code}
                    onChange={e => setCode(e.currentTarget.value)} />
                </div>
                <div>
                <label htmlFor='password'> Password : </label>
                    <input name='password' type="password"                   
                    value={password}
                    onChange={e => setPassword(e.currentTarget.value)} />
                </div>
                <div>
                <label htmlFor='reset-password'> Repeat Password : </label>           
                    <input name="reset-password" type="password"                   
                    value={password_repeat}
                    onChange={e => setPasswordRepeat(e.currentTarget.value)} />
                </div>
                <div>
                <label htmlFor='first-name'> First Name : </label>
                    <input name='first-name' type="text"                    
                    value={first_name}
                    onChange={e => setFirstName(e.currentTarget.value)} />
                </div>
                <div>
                <label htmlFor='last-name'> Last Name : </label>
                    <input name='last-name' type="text" 
                    value={last_name}
                    onChange={e => setLastName(e.currentTarget.value)} />   
                </div>             
                <Button type="primary">Submit</Button>       
            </StyledForm>
        </StyledRegistration>

    )
}