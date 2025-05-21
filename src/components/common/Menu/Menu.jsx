import { Link } from "react-router-dom";

import "./Menu.css"

export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/elianis quintana'>
            Elianis Quintana
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to='/inicio'>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to='/proyectos' >
                  Proyectos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to='/elianis quintana'>
                  Elianis Quintana
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to='/experiencia' >
                  Experiencia
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
