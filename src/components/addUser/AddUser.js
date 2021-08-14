import React, { useEffect, useState, useReducer } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

const modalReducer = (state, action) => {
  if (action.type === "SHOW_MODAL") {
    return { showModal: action.payload, errorMessage: state.errorMessage };
  }
  if (action.type === "SET_EMPTY_MESSAGE") {
    return {
      showModal: state.showModal,
      errorMessage: "Please enter valid, non-empty values",
    };
  }
  if (action.type === "SET_VALID_AGE_MESSAGE") {
    return {
      showModal: state.showModal,
      errorMessage: "Age must be geater than zero",
    };
  }
  return { showModal: true, errorMessage: "somthing wrong" };
};

const AddUser = (props) => {
  // const [showModal, setShowModal] = useState(false);
  // const [errorMessege, setErrorMessege] = useState("");

  const [modalState, modalDispatch] = useReducer(modalReducer, {
    showModal: false,
    errorMessage: "init msg",
  });

  const [isValid, setIsvalid] = useState(false);

  const [inputNameState, setInputNameState] = useState("");
  const [inputAgeState, setInputAgeState] = useState("0");
  //just for example i keep both nameRef and nameState
  const inputNameRef = React.createRef();
  const inputAgeRef = React.createRef();

  const closeModalHandler = (event) => {
    event.preventDefault();
    modalDispatch({ type: "SHOW_MODAL", payload: false });
    // setShowModal(false);
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
        // modalDispatch({type:'SHOW_MODAL' , payload:true})
        return true;
      } else if (inputNameState.trim().length === 0 || inputAgeState === "0") {
        setIsvalid(false);
        // setErrorMessege("Please enter valid, non-empty values");
        console.log("empty msg");
        modalDispatch({ type: "SET_EMPTY_MESSAGE", payload: "" });

        return false;
      } else if (parseInt(inputAgeState) < 1) {
        setIsvalid(false);
        // setErrorMessege("Age must be geater than zero");
        modalDispatch({ type: "SET_VALID_AGE_MESSAGE", payload: "" });
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
      // setShowModal(true);
      modalDispatch({ type: "SHOW_MODAL", payload: true });
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
          show={modalState.showModal}
          closeModal={closeModalHandler}
          messege={modalState.errorMessage}
        />
      </form>
    </Card>
  );
};
export default AddUser;
