import React from "react";

const Menu = () => {
  return (
    <div>
      <ul className="flex flex-col">
        <li>
          <a
            href="#"
            className="h-10 flex items-center text-sm font-semibold text-white rounded hover:text-white px-4 bg-active"
          >
            Anasayfa
          </a>
        </li>
        <li>
          <a
            href="#"
            className="h-10 flex items-center text-sm font-semibold text-link rounded hover:text-white  px-4"
          >
            Ara
          </a>
        </li>
        <li>
          <a
            href="#"
            className="h-10 flex items-center text-sm font-semibold text-link rounded hover:text-white px-4"
          >
            Kitapligin
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
