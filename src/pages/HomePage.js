import { Link } from "react-router-dom";

export default function HomePage() {
    const userId = 10;

  return (
    <div>
      <h1>Welcome!!!</h1>

      <Link to={`/users/${userId}`}>Usuarios</Link>
    </div>
  );
}
