"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink/navLink";

export default function Links() {
  const session = true
  const isAdmin = true
  const [open, setOpen]= useState(false)
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    
  ];
  return (
    <div className="flex justify-between py-3 px-6">
      <div>
        <Link href="/">
          {" "}
          <h2 className="font-bold text-xl">
            BLoo<span className="text-yellow-200">Goo</span>
          </h2>{" "}
        </Link>
      </div>
      <div>
        
          <ul>
            <li className="flex gap-4">
              {links.map((link)=>(
                <NavLink item={link} key={link.title} />
              ))}
              {
                session ? (
                  <>
                    {isAdmin && <NavLink item={{title:"Admin", path:"/admin"}} />}
                    <button>Logout</button>
                  </>
                ) : (
                  <NavLink item={{title:"Login", path:"/login"}}/>
                )
              }
             
              
            </li>
          </ul>
        
      </div>
    </div>
  );
}
