import React, { useState } from "react";
import { SignIn, SignUp } from "../../components";

const AuthPage = () => {
  const [signInType, setSignInType] = useState(false);

  return (
    <>
      {signInType ? (
        <SignUp signInType={signInType} setSignInType={setSignInType} />
      ) : (
        <SignIn signInType={signInType} setSignInType={setSignInType} />
      )}
    </>
  );
};

export default AuthPage;
