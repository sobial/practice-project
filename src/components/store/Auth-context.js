import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  username: "",
});

export default AuthContext;
