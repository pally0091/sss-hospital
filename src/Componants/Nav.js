import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../images/sss logo.png';
import './style.css';

const Nav = () => {
    return (
      <div>
        <div className="bg-sky-300 flex flex-row items-center justify-between p-5 px-10">
          <div className="w-28 bg-white rounded-md">
            <Link to="/">
              <img
                src={logo}
                alt="SSS"
              ></img>
            </Link>
          </div>
          <Link to="/">
            <h1
              className="text-6xl font-extrabold"
              id="name"
            >
              SSS Hospital
            </h1>
          </Link>
        </div>
        <div className="bg-sky-400 p-3 flex items-center justify-end">
          <NavLink
            className="font-semibold p-1 mx-1 hover:bg-slate-200 rounded-md w-32"
            to="/services"
          >
            Our Services
          </NavLink>
          <NavLink
            className="font-semibold p-1 mx-1 hover:bg-slate-200 rounded-md w-32"
            to="/doctors"
          >
            Doctors
          </NavLink>
          <NavLink
            className="font-semibold p-1 mx-1 hover:bg-slate-200 rounded-md w-32"
            to="/news"
          >
            News & Events
          </NavLink>
          <NavLink
            className="font-semibold p-1 mx-1 hover:bg-slate-200 rounded-md w-32"
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            className="font-semibold p-1 mx-1 hover:bg-slate-200 rounded-md w-32"
            to="/contact"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    );
};

export default Nav;