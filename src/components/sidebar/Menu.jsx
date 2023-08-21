import React from "react";

const Menu = () => {
  return (
    <div>
      <ul className="flex flex-col">
        <li>
          <a
            href="#"
            className="h-10 flex items-center text-sm font-semibold text-link hover:text-white"
          >
            Anasayfa
          </a>
        </li>
        <li>
          <a
            href="#"
            className="h-10 flex items-center text-sm font-semibold text-link hover:text-white"
          >
            Ara
          </a>
        </li>
        <li>
          <a
            href="#"
            className="h-10 flex items-center text-sm font-semibold text-link hover:text-white"
          >
            Kitapligin
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
