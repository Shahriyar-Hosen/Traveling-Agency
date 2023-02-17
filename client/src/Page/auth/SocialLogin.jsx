import { memo, useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaFacebook, FaGoogle } from "react-icons/fa";

import ErrorMessage from "@/common/ErrorMessage";
import auth from "firebase.inite";
import useLogin from "hooks/useLogin";
import useRedirect from "hooks/useRedirect";

const SocialLogin = memo(() => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const login = useLogin();
  const redirect = useRedirect();

  useEffect(() => {
    if (!loading && !error && user?.user?.accessToken) {
      const userDetails = user?.user;
      const token = user?.user?.accessToken;

      login(userDetails, token);
      redirect(userDetails, token);
    }
  }, [user, loading, error, login, redirect]);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 px-3">
        <button
          disabled={loading}
          className="px-2 py-3 rounded-lg w-full text-white hover:bg-[#ff3015] border-none bg-[#dd4b39] hover:duration-500 hover:ease-in-out ease-in-out duration-500 flex justify-center items-center gap-3"
          onClick={() => signInWithGoogle()}
        >
          <FaGoogle /> Login with Google
        </button>
        <button className="px-2 py-3 rounded-lg w-full text-white hover:bg-[#3675ff] border-none bg-[#506dab] flex justify-center items-center gap-3 hover:duration-500 hover:ease-in-out ease-in-out duration-500">
          <FaFacebook /> Login with Facebook
        </button>
      </div>

      <ErrorMessage minH title={error?.message} className="ml-4" />
    </>
  );
});

export default SocialLogin;
