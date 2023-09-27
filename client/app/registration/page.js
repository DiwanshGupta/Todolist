"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
// import { useRouter } from "next/router";
const registration = () => {
  // const router = useRouter();
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const managedata = (e) => {
    console.log(e);
    const name = e.target.name;
    let value = e.target.value;

    setuser({ ...user, [name]: value });
  };

  const sendoutdata = async (e) => {
    e.preventDefault();
    const { name, email, password } = user;

    console.log(user); // Check the user data before sending
    try {
      const res = await axios.post(
        "http://localhost:4000/user/registration",
        user
      );
      console.log(res); // Log the response from the backend

      if (res.status === 200) {
        // Successful response handling
        console.log("Data insert successful");
        // router.push("/home");
      } else {
        // Error handling
        console.log("Error in data insertion");
        alert("Error: " + res.data.error); // Display the error message in an alert
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.error) {
        alert("Error: " + error.response.data.error); // Display the error message in an alert
      } else {
        alert("An error occurred: " + error.message); // Display a generic error message
      }
    }
  };
  return (
    <div className="maindiv  ">
      <div className="form-bg rounded-2xl md:w-1/2 lg:w-2/6  w-4/5">
        <div className="bgrd">
          <div className="p-6   md:p-6 justify-center mt-16 items-center   text-white  forbackg hover:forbackg focus:ring-4 focus:outline-none   font-medium rounded-lg text-sm ">
            <form method="POST">
              <div className="relative z-0  w-full md:p-1.5  mb-6 group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-cyan-500 appearance-none dark:text-gray-400 dark:border-cyan-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  placeholder=" "
                  autoComplete="off"
                  value={user.name}
                  onChange={managedata}
                  required
                />
                <label
                  htmlFor="Fname"
                  className="peer-focus:font-medium absolute text-sm text-cyan-500 dark:text-cyan-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 md:peer-focus:left-1 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full md:p-1.5 mb-6 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-cyan-500 appearance-none dark:text-gray-400 dark:border-cyan-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  placeholder=" "
                  autoComplete="off"
                  value={user.email}
                  onChange={managedata}
                  required
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute md:peer-focus:left-1 text-sm text-cyan-500 dark:text-cyan-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div className="relative z-0 w-full md:p-1.5 mb-6 group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-cyan-500 appearance-none dark:text-gray-400 dark:border-cyan-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  placeholder=" "
                  autoComplete="off"
                  value={user.password}
                  onChange={managedata}
                  required
                />
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute md:peer-focus:left-1 text-sm text-cyan-500 dark:text-cyan-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>

              <div className=" text-center">
                <button
                  type="submit"
                  onClick={sendoutdata}
                  className="text-white m-auto  bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br f font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Register
                </button>
              </div>
            </form>
            <div className=" text-center md:text-center justify-center md:justify-center  flex ">
              <div className="    w-2/3 md:w-2/3  ">
                <h1>
                  <div className="text-gray-400">Already have an account?</div>
                  <div>
                    <Link href="/login" className="text-cyan-500">
                      Sign up.
                    </Link>
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default registration;
