import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Notes from "./Components/Notes";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <>
      <div style={{marginBottom:"26px"}}>
        <h1>Note Taking App</h1>
        {!localStorage.getItem("token") && <Link to="/">
          <div>Signup</div>
        </Link>}
        {!localStorage.getItem("token") && <Link to="/login">
          <div>Login</div>
        </Link>}
        {localStorage.getItem("token") && (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </>
  );
}

export default App;
