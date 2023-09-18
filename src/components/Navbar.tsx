import React from "react";
import Link from "next/link";
import Head from "next/head";

const Navbar = () => {
  return (
    <>
      <Head>
        <title>GreenKick</title>
        <meta name="description" content="GreenKick" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="p-3">
        <Link href="/" className="text-black">
          Home
        </Link>
        <Link href="/customerlist" className="text-black ml-2">
          Customers
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
