import React from 'react';
import logo from '../images/logo1.png';
import './static.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light p-0'>
      <div className='container ml-5'>
        <a className='navbar-brand' href='#'>
          <img src={logo} alt="logo" className="logo"/>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse ml-4' id='navbarText'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item border-left border-right'>
              <a className='nav-link ' href='#'>
                About S.H.E.W 
              </a>
            </li>
            <li className='nav-item border-left border-right'>
              <a className='nav-link' href='#'>
                What We Do
              </a>
            </li>
            <li className='nav-item border-left border-right'>
              <a className='nav-link' href='#'>
                Get Involved
              </a>
            </li>
            
            <li className='nav-item border-left border-right'>
              <a className='nav-link' href='#'>
                Projects
              </a>
            </li>
            
            <li className='nav-item border-left border-right'>
              <a className='nav-link' href='#'>
                Contact us
              </a>
            </li>
          </ul>
          <span className='navbar-text'>
            <a href="#" className="btn btn-danger btn-lg px-3 text-light">Donate</a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
