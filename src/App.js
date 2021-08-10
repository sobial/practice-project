import { useState } from "react";
import Users from "./components/Users/Users";
import AddUser from "./components/addUser/AddUser";
import styles from "./App.module.css";

function App() {
  const [users, setUsers] = useState([
    { name: "abbas", age: "43", id: "u1" },
    { name: "kamran", age: "32", id: "u2" },
    { name: "parviz", age: "67", id: "u3" },
    { name: "moosa", age: "12", id: "u4" },
    { name: "karim", age: "56", id: "u5" },
  ]);
  return (
    <div className={styles.app}>
      <AddUser></AddUser>
      <Users users={users}></Users>
    </div>
  );
}

export default App;
