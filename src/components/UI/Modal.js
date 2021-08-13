import styles from "./Modal.module.css";
import Card from "./Card";
import ReactDom from "react-dom";
import React from "react";

const ModalComponent = (props) => {
  return (
    <div
      className={`${styles["modal-background"]} ${
        props.show ? styles["display-block"] : styles["display-none"]
      }`}
    >
      <div className={styles["main-modal"]}>
        <Card>
          <header>
            <h2>error occured!</h2>
          </header>
          <p>{props.messege}</p>
          <footer>
            <div className={styles["button-container"]}>
              <button onClick={(event) => props.closeModal(event)}>Ok</button>
            </div>
          </footer>
        </Card>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <ModalComponent
          show={props.show}
          closeModal={props.closeModal}
          messege={props.messege}
        />,
        document.getElementById("modal-container")
      )}
    </React.Fragment>
  );
};
export default Modal;
