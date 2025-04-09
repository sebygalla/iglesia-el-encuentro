import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-blue-800/70 backdrop-blur-md backdrop-filter border-b border-blue-700/50 shadow-lg' 
        : 'bg-blue-800'
    } text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src={logo}
                alt="Logo Iglesia El Encuentro" 
                className="h-12 w-auto mr-3" 
              />
              <span className="font-semibold text-[15px] tracking-wide"></span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200 tracking-wide">
              Inicio
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200 tracking-wide">
              Quiénes Somos
            </Link>
            <Link to="/events" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200 tracking-wide">
              Eventos
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200 tracking-wide">
              Contacto
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none transition-colors duration-200"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800 shadow-lg">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors duration-200 tracking-wide"
            onClick={toggleMenu}
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors duration-200 tracking-wide"
            onClick={toggleMenu}
          >
            Quiénes Somos
          </Link>
          <Link
            to="/events"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors duration-200 tracking-wide"
            onClick={toggleMenu}
          >
            Eventos
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors duration-200 tracking-wide"
            onClick={toggleMenu}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
