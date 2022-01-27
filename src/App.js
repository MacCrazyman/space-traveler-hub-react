import { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  Navbar, Container, Nav, Image,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import fetchMissions from './fetchData';
import { loadMissions } from './redux/missions/missions';
import logo from './img/planet.png';
import './App.css';
import { getRockets } from './redux/rockets/rockets';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  useEffect(async () => {
    const missionsFetched = await fetchMissions();
    dispatch(loadMissions(missionsFetched));
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

  return (
    <div>
      <Navbar bg="light" expand="lg" className="border-bottom mb-5">
        <Container>
          <Navbar.Brand>
            <Image fluid src={logo} />
            {' '}
            <strong>Space Travelers&apos; Hub</strong>
          </Navbar.Brand>
          <Nav className="mr-auto">
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
          </Nav>
        </Container>
      </Navbar>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
