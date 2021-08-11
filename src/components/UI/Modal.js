import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div
      className={`${styles.modal} ${
        props.show ? styles["display-block"] : styles["display-none"]
      }`}
    >
      <button onClick={(event) => props.closeModal(event)}>close</button>
    </div>
  );
};
export default Modal;
