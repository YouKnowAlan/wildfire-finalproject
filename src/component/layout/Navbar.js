import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import '../../styles/layout/module.navbar.css';

export default function Navbar() {
  const [isMobileMenuShowing, setisMobileMenuShowing] = useState(false);

  return (
    <nav>
      <div className="flex flex-row items-center justify-between md:block md:max-w-7xl mx-auto pt-4 px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between h-16">
          <h1 className="text-brand">Wildfire</h1>
          <div>
            <div className="flex items-center space-x-8">
              <Link to="/" className="link">
                home
              </Link>
              <Link to="/report" className="link">
                report
              </Link>
              <Link to="/about" className="link">
                about
              </Link>
            </div>
          </div>

          <Link to="/contact" className="link">
            contact
          </Link>
        </div>

        <div className="flex flex-col md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setisMobileMenuShowing(!isMobileMenuShowing)}
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className={`h-6 w-6 ${isMobileMenuShowing ? 'hidden' : 'block'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              className={`h-6 w-6 ${isMobileMenuShowing ? 'block' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <Transition
        show={isMobileMenuShowing}
        enter="transition-opacity duration-[400ms]"
        enterFrom="opacity-0"
        enterTo="opacity-100 duration-200"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0 duration-200"
      >
        <div className="md:hidden" id="mobile-menu">
          <div className="flex flex-row items-center justify-between px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="mobileLink">
              Home
            </Link>

            <Link to="/report" className="mobileLink">
              Report
            </Link>

            <Link to="/about" className="mobileLink">
              About
            </Link>

            <Link to="/contact" className="mobileLink">
              Contact
            </Link>
          </div>
        </div>
      </Transition>
    </nav>
  );
}
