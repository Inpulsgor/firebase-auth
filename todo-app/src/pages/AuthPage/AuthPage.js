import React, { useState } from "react";
import { SignIn, SignUp } from "../../components";

const AuthPage = () => {
  const [signInType, setSignInType] = useState(false);

  return (
    <>
      {signInType ? (
        <SignIn signInType={signInType} setSignInType={setSignInType} />
      ) : (
        <SignUp signInType={signInType} setSignInType={setSignInType} />
      )}
    </>
  );
};

export default AuthPage;
