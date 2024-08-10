import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark text-white">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          <img src="/images/vaibhav_gangrade.jpg" className="rounded-circle" height="50" width="50" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded={isNavbarOpen} aria-label="Toggle navigation" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isNavbarOpen ? 'show' : ''}`} id="collapsibleNavbar">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNavbar}>About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience" onClick={closeNavbar}>Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/education" onClick={closeNavbar}>Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills" onClick={closeNavbar}>Skills</Link>
            </li>
           {/*<li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={closeNavbar}>Projects</Link>
            </li>*/} 
            <li className="nav-item">
              <Link className="nav-link" to="/hobbies" onClick={closeNavbar}>Hobbies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/achievements" onClick={closeNavbar}>Achievements</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactme" onClick={closeNavbar}>Contact Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/downloadcv" onClick={closeNavbar}>Download CV</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    
  );
}
