import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/customerList">Customers</Link>
    </nav>
  );
};

export default Navbar;
