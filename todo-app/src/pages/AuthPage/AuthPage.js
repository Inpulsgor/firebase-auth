import React, { useState } from "react";
import { Login, SignUp } from "../../components";

const AuthPage = () => {
  const [loginAuth, setLoginAuth] = useState(false);

  return <>{loginAuth ? <Login /> : <SignUp />}</>;
};

export default AuthPage;
