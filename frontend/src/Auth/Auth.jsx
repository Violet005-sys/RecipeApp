import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const [loginForm, setLoginForm] = useState(false);
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      {loginForm ? (
        <Login setLoginForm={setLoginForm} />
      ) : (
        <Register setLoginForm={setLoginForm} />
      )}
    </div>
  );
};

export default Auth;
