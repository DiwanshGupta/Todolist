import React from "react";
import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function Contact() {
  return (
    <>
      <div className=" relative flex justify-center items-center mt-24 ">
        <section className="">
          <h2 className="text-2xl font-semibold  m-auto  w-1/3 text-cyan-600 hover:text-cyan-500 text-center my-4">
            <span className="hover:text-cyan-700">Contact us</span>
          </h2>
          <p className="text-center md:mx-36 my-5 text-cyan-600   ">
            <span className="text-3xl "> Do you have any questions?</span>
            <br /> Please do not hesitate to contact us directly.
            <br /> Our team will come back to you within a matter of hours to
            help you.
          </p>

          <div className="p-5 mb-5 bg-lime-400 m-auto md:p-4 justify-center mt-5 items-center   text-white  senbg focus:ring-4 focus:outline-none   font-medium rounded-lg text-sm ">
            <form>
              <div className="relative z-0 w-full md:p-1.5 mb-6 group">
                <input
                  type="text"
                  name="Fname"
                  id="Fname"
                  className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-cyan-500 appearance-none dark:text-gray-400 dark:border-cyan-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="Fname"
                  className="peer-focus:font-medium absolute md:peer-focus:left-1 text-sm text-cyan-500 dark:text-cyan-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
              <div className="relative z-0 w-full md:p-1.5 mb-6 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-cyan-500 appearance-none dark:text-gray-400 dark:border-cyan-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute md:peer-focus:left-1 text-sm text-cyan-500 dark:text-cyan-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div className="relative z-0  w-full md:p-1.5 mb-6 group">
                <input
                  type="text"
                  name="floating_subject"
                  id="floating_subject"
                  className="block py-2.5 px-0 w-full md:p-1.5 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-cyan-500 appearance-none dark:text-gray-400 dark:border-cyan-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_subject"
                  className="peer-focus:font-medium absolute md:peer-focus:left-1 text-sm text-cyan-500 dark:text-cyan-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Subject
                </label>
              </div>
              <div className="relative z-0  w-full md:p-1.5  mb-6 group">
                <textarea
                  id="text-message"
                  name="text-message"
                  rows="2"
                  className="block py-2.5 px-0 from-textarea w-full md:p-1.5 text-sm text-gray-500 bg-transparent border-2 rounded-md  border-cyan-500 appearance-none dark:text-gray-400 dark:border-cyan-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-500 peer"
                ></textarea>
                <label
                  htmlFor="text-message"
                  className="peer-focus:font-medium absolute md:peer-focus:left-2  text-cyan-500 dark:text-cyan-500 duration-300 transform -translate-y-6 scale-90 top-8 left-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-12"
                >
                  Your message
                </label>
              </div>
              <div className=" text-center">
                <button
                  type="submit"
                  className="text-white m-auto  bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br f font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
                    <Link href="/login" className="text-cyan-700">
                      Login
                    </Link>
                  </div>
                </h1>
              </div>
            </div>
          </div>

          <div className=" text-cyan-600  flex text-center justify-center ">
            <ul className="list-none  ">
              <li>
                <p className="flex">
                  <SiGmail className="text-cyan-300 text-center text-xl m-1" />:
                  dewanshgupta120@gmail.com
                </p>
              </li>

              <li>
                <p className="flex">
                  <BiSolidPhoneCall className="text-cyan-300 text-center text-xl m-1" />
                  : +91 8800782753
                </p>
              </li>
              <li>
                <p className="flex">
                  <FaAddressCard className="text-cyan-300 text-center text-xl m-1" />
                  New Delhi,India.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
