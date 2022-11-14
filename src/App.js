
import styled, {ThemeProvider} from 'styled-components'

//libraries
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react';

//components
import { Header } from './component/Header'
import { RequireAuth } from './component/RequireAuth';

//pages
import { RegisterNewUser } from './pages/RegisterUser/RegisterUser'
import { RegistrationValidation } from './pages/RegistrationValidation' 
import { RegistrationSuccess } from './pages/RegistrationSuccess'
import { NotFound } from './pages/NotFound'
import { Login } from './pages/Login/Login'
import { Home } from './pages/Home/Home'
import { ShoppingCart } from './pages/ShoppingCartPage'


const baseTheme = {
  light:{
    primary: 'coral',
    backgroundColor: 'white',
    buttonPrimaryColor: 'black',
    buttonPrimaryTextColor: 'white',
    buttonPrimaryHoverColor: 'coral',
    buttonPrimaryHoverTextColor: 'black'
  },
  dark: {
    primary: 'yellow',
    backgroundColor: 'grey'
  }
}

const ThemeButton = styled.button`
  position: fixed;
  bottom: 50px;
  left: 20px;
`;

const Container = styled.div`
background-color: ${props => props.theme.backgroundColor};
width: 100vw;
height: 100vh;
box-sizing: border-box;
border: 1px solid purple;
`;


function App() {

  const [theme, setTheme] = useState('light');
  const switchTheme = () => {
    if (theme === 'light') setTheme('dark')
    else setTheme('light')
  };

  return (
    <ThemeProvider theme={baseTheme.light}>
      <ThemeButton onClick={switchTheme}>Switch Theme {theme}</ThemeButton>
    <Container>
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
      </Container>
    </ThemeProvider>

  );
}

export default App;
