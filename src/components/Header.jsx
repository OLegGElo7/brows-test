import React from "react";
import { Link } from "react-router-dom";
import "../style/header.scss";

const Header = () => {
  return (
    <header>
      <div className="header__wrapper">
        <div className="header__content">
          <div className="header__modal"></div>
          <div className="header__logo">Бровист | Челябинск</div>
          <div className="header_navigation">
            <Link to="/">
              <button>
                <img src="\img\iconsNav\icons8-главная-64.png" alt="home" />
              </button>
            </Link>
            <Link to="/price">
              <button>
                <img
                  src="\img\iconsNav\icons8-карточка-контакта-64.png"
                  alt="price"
                />
              </button>
            </Link>
            <Link to="/contacts">
              <button>
                <img
                  src="\img\iconsNav\icons8-средняя-цена-2-64.png"
                  alt="contact"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
