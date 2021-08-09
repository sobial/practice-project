import Users from "./components/Users/Users";
import AddUser from "./components/addUser/AddUser";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <AddUser></AddUser>
      <Users></Users>
    </div>
  );
}

export default App;