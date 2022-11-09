import { useSelector } from "react-redux";
import { selectUser } from "../store/selectors";

export function useIsUserAuthenticate() {
  const user = useSelector(selectUser);
  return !!user.token;
  // return user.token !== undefined;
}