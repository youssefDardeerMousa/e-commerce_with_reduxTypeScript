import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const navbarRef = useRef(null);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navbarRef.current && !(navbarRef.current as any).contains(event.target)) {
        setNavbarOpen(false);
       
        
      }
      
    }
    
    document.addEventListener('click', handleClickOutside);

    
    
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'rgb(160, 510, 140)' }} ref={navbarRef}>
        <div className="container">
          <Link className="navbar-brand text-dark fw-bolder" to="" onClick={()=>{setNavbarOpen(false)}}>Shopping</Link>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bolder" aria-current="page" to="/Home" onClick={() => setNavbarOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bolder" to="/Products" onClick={() => setNavbarOpen(false)}>
                  Products
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-dark fw-bolder"
                  to={''}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu" style={{ backgroundColor: 'rgb(160, 510, 140)' }}>
                  <li style={{ backgroundColor: 'rgb(160, 510, 140)' }} className="text-light">
                    <Link className="dropdown-item text-dark fw-bolder" to="/Categories_electronics" onClick={() => setNavbarOpen(false)}>
                      Electronics
                    </Link>
                  </li>
                  <li style={{ backgroundColor: 'rgb(160, 510, 140)' }} className="text-light">
                    <Link className="dropdown-item text-dark fw-bolder" to="/Categories_jewelery" onClick={() => setNavbarOpen(false)}>
                      Jewelery
                    </Link>
                  </li>
                  <li style={{ backgroundColor: 'rgb(160, 510, 140)' }} className="text-light">
                    <Link className="dropdown-item text-dark fw-bolder" to="/Categories_men" onClick={() => setNavbarOpen(false)}>
                      Men's Clothing
                    </Link>
                  </li>
                  <li style={{ backgroundColor: 'rgb(160, 510, 140)' }} className="text-light">
                    <Link className="dropdown-item text-dark fw-bolder" to="/Categories_women" onClick={() => setNavbarOpen(false)}>
                      Women's Clothing
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
