import {useNavigate, Outlet, Link} from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();

    const handleCkick = () => {
        navigate('/');
    };

  return (
    <div>
        <h1>Dashboard</h1>

        <button onClick={handleCkick}>
            Logout
        </button>

        <Link to={`welcome`}>Say welcome</Link>
        <Link to={`goodbye`}>Say goodbye</Link>

        <Outlet/>
    </div>
  )
}
