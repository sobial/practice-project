import Card from "../UI/Card";
import styles from "./User.module.css";

const User = (props) => {
  return (
    <Card className={styles.card}>
      <div className={styles["user-container"]}>
        {props.name} ({props.age}years old)
      </div>
    </Card>
  );
};
export default User;
