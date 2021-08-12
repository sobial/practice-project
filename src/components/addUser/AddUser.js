import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [errorMessege, setErrorMessege] = useState("");
  const inputNameRef = React.createRef();
  const inputAgeRef = React.createRef();

  const closeModalHandler = (event) => {
    event.preventDefault();
    setShowModal(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      inputNameRef.current.value.trim().length === 0 ||
      inputAgeRef.current.value.trim().length === 0
    ) {
      inputNameRef.current.value = "";
      inputAgeRef.current.value = "";
      //open modal
      setErrorMessege("Please enter valid, non-empty values");
      setShowModal(true);
      return;
    }
    if (inputAgeRef.current.value < 1) {
      inputNameRef.current.value = "";
      inputAgeRef.current.value = "";
      //open modal
      setErrorMessege("Age must be geater than zero");
      setShowModal(true);

      return;
    } else {
      console.log(inputNameRef.current.value);
      props.onAddUser({
        name: inputNameRef.current.value,
        age: inputAgeRef.current.value,
        id: Math.random().toString(),
      });
      inputNameRef.current.value = "";
      inputAgeRef.current.value = "";
    }
  };

  return (
    <Card>
      <form className={styles.form}>
        <div className={styles.name}>
          <label>User Name</label>
          <input type="text" ref={inputNameRef} />
        </div>
        <div className={styles.age}>
          <label>Age(years)</label>
          <input type="number" step="1" ref={inputAgeRef} />
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
