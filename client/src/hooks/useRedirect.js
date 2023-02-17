import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useRedirect = () => {
  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const redirect = useCallback(
    (user, accessToken) => {
      if (accessToken && user) {
        navigate(from, { replace: true });
      }
    },
    [from, navigate]
  );

  //   useEffect(() => {
  //     // if (responseError?.data) {
  //     //   setError(responseError.data);
  //     // }
  //     if (data?.user && data?.accessToken) {
  //       navigate(from, { replace: true });
  //     }
  //   }, [data, responseError, navigate, from]);

  return redirect;
};

export default useRedirect;
