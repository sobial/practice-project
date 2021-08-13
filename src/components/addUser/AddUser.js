import React, { useEffect, useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [errorMessege, setErrorMessege] = useState("");
  const [isValid, setIsvalid] = useState(false);
  const [inputNameState, setInputNameState] = useState("");
  const [inputAgeState, setInputAgeState] = useState("0");
  const inputNameRef = React.createRef();
  const inputAgeRef = React.createRef();

  const closeModalHandler = (event) => {
    event.preventDefault();
    setShowModal(false);
  };
  const onNameChange = (event) => {
    setInputNameState(event.target.value);
  };

  const onAgeChange = (event) => {
    setInputAgeState(event.target.value);
  };

  //this useEffect validates input whenever entered data changes but with 500ms delay
  //that means when the user stops typing, it validates the input.
  //if input values are not valid, ite sets the error message.
  useEffect(() => {
    const TimeId = setTimeout(() => {
      if (inputNameState.trim().length > 0 && parseInt(inputAgeState) > 1) {
        setIsvalid(true);
        return true;
      } else if (inputNameState.trim().length === 0 || inputAgeState === "0") {
        setIsvalid(false);
        console.log("safdaf");

        setErrorMessege("Please enter valid, non-empty values");
        return false;
      } else if (parseInt(inputAgeState) < 1) {
        setIsvalid(false);
        setErrorMessege("Age must be geater than zero");
        return false;
      }
    }, 500);
    return () => {
      clearTimeout(TimeId);
    };
  }, [inputAgeState, inputNameState]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!isValid) {
      //open modal
      setShowModal(true);
      return;
    } else {
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
          <input
            type="text"
            ref={inputNameRef}
            onChange={onNameChange}
            className={!isValid ? styles.invalid : styles.valid}
          />
        </div>
        <div className={styles.age}>
          <label>Age(years)</label>
          <input
            type="number"
            step="1"
            ref={inputAgeRef}
            onChange={onAgeChange}
            className={!isValid ? styles.invalid : styles.valid}
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
