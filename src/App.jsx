import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' // Pastikan bootstrap ter-import
import Home from './pages/home'
import Team from './pages/Team'
import Contact from './pages/Contact'

function App() {
  // State untuk navigasi sederhana tanpa library tambahan
  const [page, setPage] = useState('home')

  return (
    <>
      {/* Navbar Sederhana */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">MyProject</a>
          <div className="navbar-nav ms-auto">
            <button className={`nav-link btn ${page === 'home' ? 'active' : ''}`} onClick={() => setPage('home')}>Home</button>
            <button className={`nav-link btn ${page === 'team' ? 'active' : ''}`} onClick={() => setPage('team')}>Team</button>
            <button className={`nav-link btn ${page === 'contact' ? 'active' : ''}`} onClick={() => setPage('contact')}>Contact</button>
          </div>
        </div>
      </nav>

      {/* Konten Dinamis */}
      <main>
        {page === 'home' && <Home />}
        {page === 'team' && <Team />}
        {page === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <footer className="bg-light text-center py-4 mt-5 border-top">
        <p className="text-muted mb-0">© 2026 My Web Project - Riani Aprianti</p>
      </footer>
    </>
  )
}

export default App