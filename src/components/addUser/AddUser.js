import styles from "./AddUser.module.css";
import Card from "../UI/Card";

const AddUser = () => {
  return (
    <Card>
      <form className={styles.form}>
        <div className={styles.name}>
          <label>User Name</label>
          <input type="text" />
        </div>
        <div className={styles.age}>
          <label>Age(years)</label>
          <input type="number" step="1" />
        </div>
        <div className={styles.submit}>
          <button type="submit">Add User</button>
        </div>
      </form>
    </Card>
  );
};
export default AddUser;
