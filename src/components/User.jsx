import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/fakeAuthContext";
import styles from "./User.module.css";
function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
