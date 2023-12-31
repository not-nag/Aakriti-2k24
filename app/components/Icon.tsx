import React from "react";
import Link from "next/link";
import { IoSchool } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaShirt } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Icon({ hex, type, url }) {
  const divStyle = {
    backgroundColor: `#${hex}`,
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "2em",
    color: "black",
    margin: "0.6rem",
  };

  const renderIcon = () => {
    switch (type) {
      case "college":
        return <IoSchool />;
      case "instagram":
        return <AiFillInstagram />;
      case "facebook":
        return <FaFacebook />;
      case "youtube":
        return <FaYoutube />;
      case "shirt":
        return <FaShirt />;
      default:
        return null;
    }
  };
  return (
    <Link href={url} target="_blank">
      <div style={divStyle}>{renderIcon()}</div>
    </Link>
  );
}
