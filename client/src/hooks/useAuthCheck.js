import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";

const useAuthCheck = () => {
  const dispatch = useDispatch();
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const localAuth = localStorage?.getItem("auth");

    if (localAuth) {
      const auth = JSON.parse(localAuth);

      if (auth?.accessToken && auth?.user) {
        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
            user: auth.user,
          })
        );
      }
    }
      setAuthLoading(false);
  }, [dispatch]);

  return authLoading;
};

export default useAuthCheck;
