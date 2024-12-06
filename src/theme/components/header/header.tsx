"use client";

import React from "react";
import Image from "next/image";
import "./header.scss";
import logo from "@/theme/images/logo.png";

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-container">
        <Image src={logo} alt="Logo" width={78} height={28} />
      </div>
    </header>
  );
};

export default Header;
