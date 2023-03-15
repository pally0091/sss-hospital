import React from 'react';

const Contact = () => {
    return (
      <div className="flex flex-row justify-between bg-gradient-to-b from-blue-400 to-sky-200 p-4">
        <div className="w-1/2 m-1 border-2 rounded-md border-y-black border-x-white  ">
          <div className="bg-sky-100 p-4 flex flex-row flex-wrap justify-around">
            <card className="bg-sky-300 w-[45%] m-2 rounded-md h-56 py-5 px-2 shadow-lg shadow-gray-700 hover:shadow-sm">
              <h3 className="my-5 text-xl font-bold">Address :</h3>
              <p>
                A108 ADAM STREET <br></br>NEW YORK, NY 535022
              </p>
            </card>
            <card className="bg-sky-300 w-[45%] m-2 rounded-md h-56 py-5 px-2 shadow-lg shadow-gray-700 hover:shadow-sm">
              <h3 className="my-5 text-xl font-bold">Call Us :</h3>
              <p>
                +000 000 0000<br></br>+000 000 0000
              </p>
            </card>
            <card className="bg-sky-300 w-[45%] m-2 rounded-md h-56 py-5 px-2 shadow-lg shadow-gray-700 hover:shadow-sm">
              <h3 className="my-5 text-xl font-bold">Email :</h3>
              <p>
                info@ssshospital.com<br></br>contact@ssshospital.com
              </p>
            </card>
            <card className="bg-sky-300 w-[45%] m-2 rounded-md h-56 py-5 px-2 shadow-lg shadow-gray-700 hover:shadow-sm">
              <h3 className="my-5 text-xl font-bold">Working Hours :</h3>
              <p>
                Open 24/7<br></br>Office 9AM to 8PM
              </p>
            </card>
          </div>
        </div>
        {/* form */}
        <div className="w-1/2 p-2 m-1 border-2 rounded-md border-x-black border-y-white">
          <form className="max-w-xl bg-sky-100 p-4 text-left rounded-md mx-auto mt-8">
            <h2 className="text-center text-3xl font-semibold">Contact Us</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                for="name"
              >
                Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="johndoe@example.com"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                for="message"
              >
                Message
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="5"
                placeholder="Enter your message here."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Contact;