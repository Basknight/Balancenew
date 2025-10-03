import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
    return null;
  }

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div style={{ margin: "50px" }}>
      <h2>Bienvenido, {user.username}!</h2>
      <p>Correo : {user.email}</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}
