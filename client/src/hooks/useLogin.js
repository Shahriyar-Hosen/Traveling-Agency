import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { userLoggedIn } from "features/auth/authSlice";

const useLogin = () => {
  const dispatch = useDispatch();

  const login = useCallback(
    (user, accessToken) => {
      if (accessToken && user) {
        const {
          displayName,
          email,
          emailVerified,
          photoURL,
          phoneNumber,
          accessToken,
          metadata,
        } = user || {};

        const userDetails = {
          name: displayName,
          email,
          emailVerified,
          image: photoURL,
          phone: phoneNumber,
          location: { ...metadata },
          accessToken,
        };

        localStorage.setItem(
          "auth",
          JSON.stringify({
            accessToken: accessToken,
            user: userDetails,
          })
        );

        dispatch(
          userLoggedIn({
            accessToken: accessToken,
            user: userDetails,
          })
        );
      }
    },
    [dispatch]
  );

  return login;
};

export default useLogin;
