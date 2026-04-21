import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/home'
import Team from './pages/Team'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Navbar dengan React Router */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-5" to="/">
            ✨ MyProject
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-2">
              <li className="nav-item">
                <Link
                  className={`nav-link fw-500 ${
                    isActive('/') ? 'active border-bottom border-3 border-primary' : ''
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fw-500 ${
                    isActive('/team') ? 'active border-bottom border-3 border-primary' : ''
                  }`}
                  to="/team"
                >
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fw-500 ${
                    isActive('/contact') ? 'active border-bottom border-3 border-primary' : ''
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content dengan Routes */}
      <main className="min-vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-4 mt-5 border-top">
        <div className="container">
          <p className="mb-0">© 2026 My Web Project - Riani Aprianti</p>
        </div>
      </footer>
    </>
  )
}

export default App