import { useState } from "react";
import React from "react";

import Login from "./components/Login/Login";
import Users from "./components/Users/Users";
import AddUser from "./components/addUser/AddUser";
import AuthContext from "./components/store/Auth-context";

function App() {
  const [users, setUsers] = useState([
    { name: "abbas", age: "43", id: "u1" },
    { name: "kamran", age: "32", id: "u2" },
    { name: "parviz", age: "67", id: "u3" },
    { name: "moosa", age: "12", id: "u4" },
    { name: "karim", age: "56", id: "u5" },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const onLoginHandler = (username, pass) => {
    setIsLoggedIn(true);
    setUsername(username);
    console.log(username, pass);
  };

  const addUserHandler = (newUser) => {
    // console.log(user.name, user.age);
    setUsers((prevState) => {
      return [...prevState, newUser];
    });
  };
  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          username: username,
        }}
      >
        {!isLoggedIn && <Login onLogin={onLoginHandler} />}
        {isLoggedIn && (
          <div>
            <AddUser onAddUser={addUserHandler}></AddUser>
            <Users users={users}></Users>
          </div>
        )}
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
