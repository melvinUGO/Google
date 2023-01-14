import React from "react";
import { NavLink } from "react-router-dom";

const link = [
  { url: "/search", text: "🔎 All" },
  { url: "/imagesearch", text: "🖼️ Images" },
];

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {link.map(({ url, text }, index) => {
        return (
          <NavLink
            key={index}
            to={url}
            className="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 m-2"
          >
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Links;
