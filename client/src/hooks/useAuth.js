import { useSelector } from "react-redux";

const useAuth = () => {
  const auth = useSelector((state) => state);

  console.log(auth);

  if (auth?.accessToken && auth?.user) {
    return auth;
  } else {
    return false;
  }
};

export default useAuth;
