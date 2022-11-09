import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newUser } from "../store/slices/registerUser";



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
    <div className="registration-page">
        <h4>Please provide an email address to register</h4>
        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)} />
            <button type="submit"> Register </button>
        </form>

    </div>
)
}


export { RegisterNewUser }