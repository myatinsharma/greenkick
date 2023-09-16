import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-3">
      <Link href="/" className="text-black">Home</Link>
      <Link href="/customerList" className="text-black ml-2">Customers</Link>
    </nav>
  );
};

export default Navbar;
