"use client";
import { SidebarLink } from "@/components/common";
import IconMenuDashboard from "@/core/icons/icon-menu-dashboard";
import IconMenuUsers from "@/core/icons/icon-menu-users";
import React from "react";

const Menu = () => {
  return (
    <ul className="my-4">
      <SidebarLink href="/" text="main" Icon={IconMenuDashboard} />
      <SidebarLink href="/addEmployee" text="Add Employee" Icon={IconMenuUsers} />
    </ul>
  );
};

export default Menu;
