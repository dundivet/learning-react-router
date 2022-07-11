import {useNavigate} from 'react-router-dom';

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
    </div>
  )
}
