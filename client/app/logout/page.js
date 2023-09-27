"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import axios from "axios";

const Logout = () => {
  const router = useRouter(); // Get the router object from Next.js

  useEffect(() => {
    const logout = async () => {
      try {
        const deleteCookie = (name) => {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        };

        // Call the deleteCookie function with the name of the cookie you want to delete
        deleteCookie("jwtoken");
        router.push("/login"); // Replace "/login" with your actual login route
      } catch (error) {
        // Handle errors here if needed
        console.error("Logout error:", error);
      }
    };

    logout();
  }, [router]); // Make sure to include router in the dependency array

  return <div>Logout</div>;
};

export default Logout;
