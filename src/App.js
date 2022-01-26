import { useEffect } from 'react';
import fetchMissions from './fetchData';
import { loadMissions } from './redux/missions/missions';
import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from './img/planet.png';
import './App.css';
import { getRockets } from './redux/rockets/rockets';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: 'My Profile',
    },
  ];

  const dispatch = useDispatch();

  useEffect(async () => {
    const missionsFetched = await fetchMissions();
    dispatch(loadMissions(missionsFetched));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className="nav-link px-2 nav-links mr-10"
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
