import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { title } from "process";
import clsx from "clsx";
import {
  HomeOutlined,
  PlusCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    {
      title: "Home",
      path: "/",
      icon: <HomeOutlined className="text-auburn" />,
    },
    {
      title: "Orders",
      path: "/orders",
      icon: <PlusCircleOutlined className="text-auburn" />,
    },
    {
      title: "Customers",
      path: "/customers",
      icon: <UserOutlined className="text-auburn" />,
    },
  ];

  return (
    <>
      <Head>
        <title>Elegance IPR</title>
        <meta name="description" content="GreenKick" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost" onClick={toggleNavbar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-chocolate-cosmos text-xl">
            Elegance IPR
          </a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={clsx(
          ["fixed bg-platinum h-full z-10 rounded-sm"],
          [!isCollapsed ? "w-48" : "w-8"]
        )}
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={`${item.path.toLowerCase()}`}
            className="text-chocolate-cosmos ml-2 block font-semibold text-sm my-2"
          >
            {isCollapsed ? (
              item.icon
            ) : (
              <>
                <div className="flex items-center text-auburn">
                  <span className="flex mr-1">{item.icon}</span>
                  {item.title}
                </div>
              </>
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
