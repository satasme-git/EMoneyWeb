import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import { ContactlessSharp } from "@material-ui/icons";



export const SidebarData = [

      
  {
    title: "Dashboard",
    path: "/admin/admindash",
    icon: <AiIcons.AiOutlineDashboard />,
  },

  {
    title: "Users",
    path: "/admin/users",
    icon: <AiIcons.AiOutlineDashboard />,
  },
  {
    title: "Admins Registration",
    path: "/admin/admin",
    icon: <RiIcons.RiProfileFill />,
  },

  {
    title: "Earn Settings ",
    path: "#",
    icon: <RiIcons.RiMoneyDollarCircleLine />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "YouTube ",
        path: "/admin/youtube",
        icon: <AiIcons.AiFillYoutube />,
      },
      
      {
        title: "Facebook ",
        path: "/admin/facebook",
        icon: <FaIcons.FaFacebook />,
      },
      {
        title: "Instagram ",
        path: "/admin/instagram",
        icon: <AiIcons.AiFillInstagram />,
      },
      {
        title: "Twitter ",
        path: "/admin/twitter",
        icon: <AiIcons.AiOutlineTwitter />,
      },
      {
        title: "TikTok ",
        path: "/admin/tikTok",
        icon: <SiIcons.SiTiktok />,
      },
      {
        title: "Links ",
        path: "/admin/link",
        icon: <AiIcons.AiFillChrome />,
      },
      {
        title: "Servey ",
        path: "/admin/servey",
        icon: <AiIcons.AiOutlineOrderedList />,
      },
    ],
  },

  {
    title: "Earning History ",
    path: "#",
    icon: <FaIcons.FaHistory />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      
      {
        title: "YouTube Earn History  ",
        path: "/admin/youtubeearnhistory",
        icon: <AiIcons.AiFillYoutube />,
      },
      {
        title: "Facebook Earn History   ",
        path: "/admin/facebookearnhistory",
        icon: <FaIcons.FaFacebook />,
      },
      {
        title: "Instagram Earn History   ",
        path: "/admin/instagramearnhistory",
        icon: <AiIcons.AiFillInstagram />,
      },
      {
        title: "Twitter Earn History  ",
        path: "/admin/Twitterearnhistory",
        icon: <AiIcons.AiOutlineTwitter />,
      },
      {
        title: "TikTok Earn History  ",
        path: "/admin/TikTokearnhistory",
        icon: <SiIcons.SiTiktok />,
      },
      {
        title: "Web Earn Hostory ",
        path: "/admin/linkhistory",
        icon: <AiIcons.AiFillChrome />,
      },
      {
        title: "Servey Earn History",
        path: "/admin/serveyhistory",
        icon: <AiIcons.AiOutlineOrderedList />,
      },
    ],
  },
  

  {
    title: "Point Settings",
    path: "/admin/point",
    icon: <AiIcons.AiOutlineDashboard />,
  },
  {
    title: "Manage Orders",
    path: "/admin/adminmanageorders",
    icon: <FaIcons.FaFirstOrder />,
  },
  {
    title: "Pending Serveys",
    path: "/admin/viewservey",
    icon: <AiIcons.AiOutlineOrderedList />,
  },
  {
    title: "Payment Summery",
    path: "/admin/adminpaymentmanagement",
    icon: <AiIcons.AiOutlineFall />,
  },
  {
    title: "Feedback",
    path: "/admin/feedback",
    icon: <RiIcons.RiFeedbackFill />,
  },
  {
    title: "Approve Videos",
    path: "/admin/approvevideos",
    icon: <AiIcons.AiFillVideoCamera />,
  },
  
  
];
