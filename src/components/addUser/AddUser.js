import { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(userName, userAge);
    props.onAddUser({
      name: userName,
      age: userAge,
      id: Math.random().toString(),
    });
    setUserName("");
    setUserAge("");
  };
  const onUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  const onUserAgeChange = (event) => {
    setUserAge(event.target.value);
  };
  return (
    <Card>
      <form className={styles.form}>
        <div className={styles.name}>
          <label>User Name</label>
          <input type="text" onChange={onUserNameChange} value={userName} />
        </div>
        <div className={styles.age}>
          <label>Age(years)</label>
          <input
            type="number"
            step="1"
            onChange={onUserAgeChange}
            value={userAge}
          />
        </div>
        <div className={styles.submit}>
          <button type="submit" onClick={submitHandler}>
            Add User
          </button>
        </div>
      </form>
    </Card>
  );
};
export default AddUser;
