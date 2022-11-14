//hooks from various libraries
import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


//slices
import { newUser } from "../../store/slices/registerUser";

//styles
import { StyledForm, } from "../../component/StyleComponents/StyledForm";
import { StyledRegistration } from '../../component/StyleComponents/StyledRegistration';
import { Button } from "../../component/StyleComponents/StyledButton";



function RegisterNewUser() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(newUser({ email }));
        navigate("/registration/validation");
    };

return (
    <StyledRegistration>
        <StyledForm onSubmit={handleSubmit}>
             <div>
            <label htmlFor='email'> Please provide an email address:</label>
                <input type="text" 
                name='email'
                value={email}
                onChange={e => setEmail(e.currentTarget.value)} />
            
            </div>
            <Button type="primary"> Register </Button>
        </StyledForm>
    </StyledRegistration>
)
}


export { RegisterNewUser }