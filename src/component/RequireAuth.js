import { Navigate, useLocation } from "react-router-dom";
import { useIsUserAuthenticate } from "../hooks/useAuth";

// High Order Component (HOC) that wraps a component and requires the user to be authenticated
export function RequireAuth(props) {
  const auth = useIsUserAuthenticate();
  const location = useLocation();

  if (!auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return props.children;
}