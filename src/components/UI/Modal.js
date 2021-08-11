import styles from "./Modal.module.css";
import Card from "./Card";

const Modal = (props) => {
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
export default Modal;
