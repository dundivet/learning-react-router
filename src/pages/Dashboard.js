import {useNavigate, Route, Routes, Link} from 'react-router-dom';

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

        <Link to={`/dashboard/welcome`}>Say welcome</Link>

        <Routes>
            <Route path='welcome' element={<p> Welcome!!!</p>} />
        </Routes>

    </div>
  )
}
