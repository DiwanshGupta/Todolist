"use client";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const signindata = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    try {
      const res = await axios.post(
        "http://localhost:4000/user/login",
        userData
      );
      console.log(res.data.token);

      if (res.status === 400 || !userData) {
        alert("Error: " + res.data.error);
      } else {
        console.log("Data insert successful");
        alert("User matched, signin successfully");

        Cookies.set("jwtoken", res.data.token, { expires: 7 });
        router.push("/notes");
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.error) {
        alert("Error: " + error.response.data.error);
      } else {
        alert("An error occurred: " + error.message);
      }
    }
  };
  return (
    <>
      <div className="maindiv  ">
        <div className="form-bg rounded-2xl md:w-1/2 lg:w-2/6  w-4/5">
          <div className="p-5   md:p-4 justify-center mt-16 items-center   text-white  signgh hover:signgh focus:ring-4 focus:outline-none   font-medium rounded-lg text-sm ">
            <form method="post">
              <div className="relative z-0 w-full md:p-1.5 mb-6 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-cyan-500 appearance-none dark:text-gray-400 dark:border-cyan-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute md:peer-focus:left-1 text-sm text-cyan-500 dark:text-cyan-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div className="relative z-0 w-full md:p-1.5 mb-6 group">
                <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-cyan-500 appearance-none dark:text-gray-400 dark:border-cyan-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  value={password}
                  placeholder=" "
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label
                  htmlFor="floating_password"
                  className="peer-focus:font-medium absolute md:peer-focus:left-1 text-sm text-cyan-500 dark:text-cyan-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>

              <div className=" text-center">
                <button
                  type="submit"
                  onClick={signindata}
                  className="text-white m-auto  bg-gradient-to-r from-orange-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br f font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className=" text-center md:text-center justify-center md:justify-center  flex ">
              <div className="  w-2/3 md:w-2/3 md:flex md:justify-center  ">
                <h1>
                  <div className="text-gray-900 ">
                    Did'nt have a account?{" "}
                    <Link href="/registration" className="text-cyan-700">
                      Login
                    </Link>
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
