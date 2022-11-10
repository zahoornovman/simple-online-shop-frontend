import { Navigate, useLocation } from "react-router-dom";
import { useIsUserAuthenticate } from "../hooks/useAuth";

import { useState } from "react";

//modal
// import { LoginModal } from './modal/LoginModal'

// High Order Component (HOC) that wraps a component and requires the user to be authenticated
export function RequireAuth(props) {
  const auth = useIsUserAuthenticate();
  const location = useLocation();

  // const [showLoginModal, setShowLoginModal] = useState(true);

  // function handleClick(){
  //     console.log('entering Login Modal handle click')
  //     setShowLoginModal(!showLoginModal);

  //  }



  // on click => 
  // if token
  // => change modal
  // else 
  //   => login

  //if (!auth && location.pathname !== '/login')
  if (!auth) { 
    //setShowLoginModal(true);
    
    return <Navigate to="/login" state={{ from: location }} replace />;    
    // <LoginModal handleClick = {handleClick} show = {showLoginModal}/>
    
  }

  // if (!auth && location.pathname !== '/login'){  
  //   return <Navigate print = {console.log('no auth not on login')}to="/login" state={{ from: location }} replace />
  // } else if (auth && location.pathname !== '/login'){
  //   return <Navigate print = {console.log('auth not on login')} to='/shoppingCart'/>
  // } else if (!auth && location.pathname === '/login' ){
  //   console.log('no auth on login page')
  //   return null
  // }
  // console.log('no auth not on login page')
  return props.children;
}