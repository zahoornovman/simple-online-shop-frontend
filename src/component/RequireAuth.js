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

  if (!auth) { 
    //setShowLoginModal(true);
    
    return <Navigate to="/login" state={{ from: location }} replace />;    
    // <LoginModal handleClick = {handleClick} show = {showLoginModal}/>
    
  }

  return props.children;
}