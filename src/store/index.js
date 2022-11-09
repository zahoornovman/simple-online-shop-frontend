import { configureStore } from '@reduxjs/toolkit'


import { reducer as userReducer } from './slices/loginUser';
import { reducer as registerUserReducer } from './slices/registerUser';
import { reducer as newUserValidationReducer} from './slices/newUserValidation';
import { reducer as merchandiseReducer } from './slices/merchandise';
import { reducer as shoppingCartReducer } from './slices/shoppingCart';


const store = configureStore({
    reducer: {        
        registerUser: registerUserReducer,
        validateNewUser: newUserValidationReducer,
        user: userReducer,
        merchandise: merchandiseReducer,
        shoppingCart: shoppingCartReducer
    }
});


export { store } 