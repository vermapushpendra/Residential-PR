import { Link, NavLink } from "react-router-dom";
import "/src/index.css";
import { useEffect, useState } from "react";


export default function Header() {
  const [isSticky, setSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setSticky(currentScrollPos > 0 && !visible);
      setPrevScrollPos(currentScrollPos);
      setScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-1000 ${isSticky ? '-translate-y-full' : 'translate-y-0'} ${scrollPos > 0 ? 'bg-white py-3 md:py-4' : 'bg-transparent py-12 md:py-16 text-white'}`}>
      <nav className="px-4 ">
        <div className="flex flex-wrap text-xl justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="/src/assets/logo2.png" className="h-10 md:h-12 ml-10 2xl:ml-0" alt="Logo" />
          </Link>

          <div
            className="hidden lg:flex items-center w-full lg:w-auto mr-12 lg:mr-7 xl:mr-12"
            id="mobile-menu-2"
          >
            <ul className="flex lg:space-x-7 items-center">
              
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 duration-200 ${isActive ? "underline underline-offset-8 " : ""} hover:text-orange-600 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block py-2 duration-200 ${isActive ? "underline underline-offset-8 " : ""} hover:text-orange-600 lg:p-0`
                  }
                >
                  Portfolio
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    `block py-2 duration-200 ${isActive ? "underline underline-offset-8 " : ""} hover:text-orange-600 lg:p-0`
                  }
                >
                  Reviews
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Admin"
                  className={({ isActive }) =>
                    `block py-2 duration-200 ${isActive ? "underline underline-offset-8 " : ""} hover:text-orange-600 lg:p-0`
                  }
                >
                  Listing
                </NavLink>
              </li>

              <li>
                <Link to="#" className="block py-2">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </Link>
              </li>

              <li>
                <Link to="#" className="block py-2">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </Link>
              </li>

              <li>
                <Link to="#" className="block py-2">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2.2c3.2 0 3.6.01 4.9.07 1.3.06 2.2.27 2.7.56.6.32 1.1.75 1.6 1.4.45.65.8 1.25 1.1 1.95.3.7.5 1.6.6 2.7.06 1.3.07 1.6.07 4.9s-.01 3.6-.07 4.9c-.06 1.3-.27 2.2-.56 2.7-.32.6-.75 1.1-1.4 1.6-.65.45-1.25.8-1.95 1.1-.7.3-1.6.5-2.7.6-1.3.06-1.6.07-4.9.07s-3.6-.01-4.9-.07c-1.3-.06-2.2-.27-2.7-.56-.6-.32-1.1-.75-1.6-1.4-.45-.65-.8-1.25-1.1-1.95-.3-.7-.5-1.6-.6-2.7-.06-1.3-.07-1.6-.07-4.9s.01-3.6.07-4.9c.06-1.3.27-2.2.56-2.7.32-.6.75-1.1 1.4-1.6.65-.45 1.25-.8 1.95-1.1.7-.3 1.6-.5 2.7-.6C8.4 2.21 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3.01 7 .07 5.7.13 4.7.34 3.9.68 3.1 1.01 2.5 1.48 2 2c-.5.54-.96 1.1-1.32 1.8-.34.75-.56 1.7-.6 2.7C.01 8.3 0 8.7 0 12s.01 3.7.07 5c.06 1.3.27 2.2.56 2.7.32.6.75 1.1 1.4 1.6.65.45 1.25.8 1.95 1.1.7.3 1.6.5 2.7.6 1.3.06 1.6.07 4.9.07s3.6-.01 4.9-.07c1.3-.06 2.2-.27 2.7-.56.6-.32 1.1-.75 1.6-1.4.45-.65.8-1.25 1.1-1.95.3-.7.5-1.6.6-2.7.06-1.3.07-1.6.07-4.9s-.01-3.6-.07-4.9c-.06-1.3-.27-2.2-.56-2.7-.32-.6-.75-1.1-1.4-1.6-.65-.45-1.25-.8-1.95-1.1-.7-.3-1.6-.5-2.7-.6C15.3.01 15 .01 12 0z"
                    />
                    <path
                      d="M12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zM18.4 5.8c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4z"
                    />
                  </svg>
                  <span className="sr-only">Instagram page</span>
                </Link>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-6 lg:py-3 lg:px-6 ${scrollPos > 0 ? `${isActive ? "text-white bg-black" : "text-black"}` : `${isActive ? "text-white bg-black" : "text-black bg-white"}`}`
                  }
                
                >
                  Contact
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
