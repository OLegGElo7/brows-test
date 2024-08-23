import React from "react";
import "../style/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="header__wrapper">
        <div className="header__content">
          <div className="footer__logo">ksssenia_brows | </div>
          <div className="footer__social">
            <button>
              <a href="https://vk.com/ksssenia_brows" target="_blank">
                <img src="\img\social\VK.webp" alt="vk" />
              </a>
            </button>
            <button>
              <a
                href="https://www.instagram.com/ksssenia_brows?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                target="_blank"
              >
                <img src="\img\social\Instagram.png" alt="inst" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
