import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-dark', 'text-light');
      document.body.classList.remove('bg-light', 'text-dark');
    } else {
      document.body.classList.add('bg-light', 'text-dark');
      document.body.classList.remove('bg-dark', 'text-light');
    }
  }, [darkMode]);

  return (
    <Router>
      <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-primary' : 'navbar-light bg-light'} mb-4`}>
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
            <img src="/octofitapp-small.png" alt="Octofit Logo" className="octofit-logo" />
            Octofit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">Workouts</Link>
              </li>
            </ul>
            <button
              className={`btn btn-sm ms-auto ${darkMode ? 'btn-light text-dark' : 'btn-dark text-light'}`}
              onClick={() => setDarkMode((prev) => !prev)}
              style={{ minWidth: 44, minHeight: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}
              aria-label="Toggle dark/light mode"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <span role="img" aria-label="Light mode" style={{fontSize: 22}}>🌞</span>
              ) : (
                <span role="img" aria-label="Dark mode" style={{fontSize: 22}}>🌙</span>
              )}
            </button>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<div className={`p-5 mb-4 rounded-3 ${darkMode ? 'bg-secondary text-light' : 'bg-light text-dark'}`}><div className="container-fluid py-5"><h1 className="display-5 fw-bold">Welcome to Octofit Tracker!</h1><p className="col-md-8 fs-4">Track your fitness, join teams, and compete on the leaderboard. Use the navigation above to get started.</p></div></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
