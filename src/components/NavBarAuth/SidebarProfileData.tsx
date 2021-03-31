import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";

export const SidebarProfileData = [
  {
    title: "Profile",
    path: "/profile",
    icon: <RiIcons.RiProfileLine />,
    cName: "nav-text",
  },
  {
    title: "Friends",
    path: "/friends",
    icon: <FaIcons.FaUserFriends />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    icon: <GiIcons.GiThreeFriends />,
    cName: "nav-text",
  },
];
