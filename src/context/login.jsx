import React, { useContext } from "react";
import UserContext from "./userContext";

function Login(props) {
  const userContext = useContext(UserContext);
  return (
    <div>
      <button
        onClick={() => userContext.onLoggedIn("username")}
        className="btn btn-primary m-3"
      >
        Login
      </button>
      <button
        onClick={() => userContext.onLogout("username")}
        className="btn btn-danger m-3"
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
