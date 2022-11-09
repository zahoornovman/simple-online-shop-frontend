import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectRegisterUser, selectValidationUser } from '../store/selectors'

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
        <div className="registration-validation">
            <h3>Enter more details to update user information & activate user: </h3>
            <form onSubmit={handleOnSubmit}>
                <label>
                    Username:
                    <input type="text" 
                    placeholder='username'
                    value={username}
                    onChange={e => setUsername(e.currentTarget.value)} />
                </label>
                <label>
                    Code:
                    <input type="text" 
                    placeholder='code'
                    value={code}
                    onChange={e => setCode(e.currentTarget.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" 
                    placeholder='password'
                    value={password}
                    onChange={e => setPassword(e.currentTarget.value)} />
                </label>
                <label>
                    Repeat Password:
                    <input type="password" 
                    placeholder='password'
                    value={password_repeat}
                    onChange={e => setPasswordRepeat(e.currentTarget.value)} />
                </label>
                <label>
                    First Name:
                    <input type="text" 
                    placeholder='First Name'
                    value={first_name}
                    onChange={e => setFirstName(e.currentTarget.value)} />
                </label>
                <label>
                    Last Name:
                    <input type="text" 
                    placeholder='Last Name'
                    value={last_name}
                    onChange={e => setLastName(e.currentTarget.value)} />
                </label>
                <button>Submit</button>
                
            </form>
        </div>

    )
}