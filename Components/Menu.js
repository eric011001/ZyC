import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
Link
const Menu = ({lenguage, setLenguage}) => {
    const router = useRouter();
    return(
        <nav className="navbar navbar-expand-md">
          <div className="container">
            <Link className="logo" href="/">
              {" "}
              <img src="../img/logo.png" alt=""></img>{" "}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar"
              aria-controls="navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <span className="navbar-toggler-icon">
                <i className="fa fa-bars"></i>
              </span>{" "}
            </button>

            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                  {" "}
                  <span className={`nav-link ${router.pathname == '/' ? 'active' : ''}`}>
                    <Link href="/" id="navBtnHome">
                        {lenguage === 'EN' ? 'Home' : 'Inicio'}
                    </Link>
                  </span>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${router.pathname == '/about' ? 'active' : ''}`} href="/about" id="navBtnAbout">
                    {lenguage === 'EN' ? 'About' : 'Acerca de'}
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  {" "}
                  <span className={`nav-link ${router.pathname == '/services' ? 'active' : ''}`} id="navBtnServices">
                    {" "}
                    {lenguage === 'EN' ? 'Services' : 'Servicios'} <i className="fa fa-angle-down"></i>
                  </span>
                  <ul className="dropdown-menu last">
                    <li className="dropdown-item">
                      <Link href="/services" id="navBtnConst">
                        {lenguage === 'EN' ? 'Construction' : 'Construcción'}
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/services" id="navBtnServiceRoute">
                        {lenguage === 'EN' ? 'Service route' : 'Ruta de servicio'}
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/services" id="navBtnrepairs">
                        {lenguage === 'EN' ? 'Repairs' : 'Reparación'}
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/services" id="navBtnremodel">
                        {lenguage === 'EN' ? 'Renovations' : 'Remodelación'}
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  {" "}
                  <span className="nav-link" id="navBtnLeng">
                    {" "}
                    lenguage <i className="fa fa-angle-down"></i>
                  </span>
                  <ul className="dropdown-menu last">
                    <li className="dropdown-item">
                      <a



                        onClick={() => {
                          setLenguage('ES')
                        }}
                      >
                        Es/MX
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a
                        onClick={() => {
                            setLenguage('EN')
                        }}
                      >
                        En/US
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${router.pathname == '/contact' ? 'active' : ''}`}
                    href="/contact"
                    id="navBtnContact"
                  >
                    {lenguage === 'EN' ? 'Contact' : 'Contacto'}
                    
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default Menu;