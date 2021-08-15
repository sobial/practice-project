import Card from "../UI/Card";
import { useState } from "react";

const Login = (props) => {
  const [enteredPass, setEnteredPass] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredUsername, enteredPass);
  };

  const onPassChangeHandler = (event) => {
    setEnteredPass(event.target.value);
  };
  const onUsernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  return (
    <Card>
      <form onSubmit={onSubmitHandler}>
        <div>
          <h2>LOGIN</h2>
        </div>
        <div>
          <input type="text" onChange={onUsernameChangeHandler}></input>
        </div>
        <div>
          <input type="password" onChange={onPassChangeHandler}></input>
        </div>
        <div>
          <button type="submit">login</button>
        </div>
      </form>
    </Card>
  );
};
export default Login;
