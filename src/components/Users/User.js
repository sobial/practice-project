import Card from "../UI/Card";
import styles from "./User.module.css";

const User = (props) => {
  return (
    <Card className={styles.card}>
      {props.name} ({props.age}years old)
    </Card>
  );
};
export default User;
