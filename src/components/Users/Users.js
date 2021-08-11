import User from "./User";
// import styles from "./Users.module.css";
import Card from "../UI/Card";

const Users = (props) => {
  return (
    <Card>
      {props.users.map((user) => {
        return <User name={user.name} age={user.age} key={user.id} />;
      })}
    </Card>
  );
};
export default Users;
