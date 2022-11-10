
import './App.css';

import { Route, Routes } from 'react-router-dom'

//components
import { Header } from './component/Header'
import { RequireAuth } from './component/RequireAuth';

//pages
import { RegisterNewUser } from './pages/RegisterUser'
import { RegistrationValidation } from './pages/RegistrationValidation' 
import { RegistrationSuccess } from './pages/RegistrationSuccess'
import { NotFound } from './pages/NotFound'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { ShoppingCart } from './pages/ShoppingCartPage'

function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/shoppingCart' element={
           <RequireAuth>
            <ShoppingCart/> 
           </RequireAuth>
        }/>      
        <Route path='/registerNewUser' element= {<RegisterNewUser/>}/>
        <Route path='/registration/validation' element={<RegistrationValidation/>}/>
        <Route path='/registration/validation/success' element={<RegistrationSuccess/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>

  );
}

export default App;
