"use client";
import "../app/headerTabs.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const HeaderTabs = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "home", path: "/" },
    { name: "music", path: "/music" },
    { name: "SPEAK LESS SAY MORE", path: "/SLSM" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <header className="center">
      <Image
        src="/hfLogo25.png"
        alt="hot fudge logo"
        width={500}
        height={200}
        priority
      />

      <nav className="header-buttons">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            href={item.path}
            className={`tab-button ${pathname === item.path ? "active" : ""}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default HeaderTabs;