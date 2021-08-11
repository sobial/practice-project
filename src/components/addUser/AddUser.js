import { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorMessege, setErrorMessege] = useState("");

  const closeModalHandler = (event) => {
    event.preventDefault();
    setShowModal(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (userAge.trim().length === 0 || userName.trim().length === 0) {
      //open modal
      setUserName("");
      setUserAge("");
      setErrorMessege("Please enter valid, non-empty values");
      setShowModal(true);
      return;
    }
    if (userAge < 1) {
      //open modal
      setUserName("");
      setUserAge("");
      setErrorMessege("Age must be geater than zero");
      setShowModal(true);
      return;
    } else {
      props.onAddUser({
        name: userName,
        age: userAge,
        id: Math.random().toString(),
      });
      setUserName("");
      setUserAge("");
    }
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
        <Modal
          show={showModal}
          closeModal={closeModalHandler}
          messege={errorMessege}
        />
      </form>
    </Card>
  );
};
export default AddUser;
