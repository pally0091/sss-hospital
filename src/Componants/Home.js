import React from 'react';
import { Link } from 'react-router-dom';
import Patient from './Patient';
import './style.css';

const Home = () => {
    return (
      <div>
        <div
          id="banner"
          className=" p-16 pt-32 w-full mx-auto min-h-fit bg-base-200"
        >
          <h2 className="text-3xl font-semibold text-left">Welcome to </h2>
          <h1 className="text-5xl text-left font-bold text-sky-900">
            SSS Hospital
          </h1>
          <p className="text-justify w-1/3 p-4 py-10 bg-inherit rounded-md mt-3">
            Where we are dedicated to providing the highest quality healthcare
            to our patients. Our mission is to improve the health and well-being
            of the communities we serve by providing compassionate,
            patient-centered care in a safe and welcoming environment.
          </p>

          <Link to="/appointment">
            <button className="btn btn-wide">Get Appointment</button>
          </Link>
        </div>
        <Patient></Patient>
      </div>
    );
};

export default Home;