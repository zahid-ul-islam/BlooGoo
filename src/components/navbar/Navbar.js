import Link from "next/link";
import React from "react";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="border bottom-2 bg-blue-950 text-white p-2">
      <Links />
      
    </div>
  );
};

export default Navbar;
