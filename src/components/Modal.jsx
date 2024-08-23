import React from "react";
import { Link } from "react-router-dom";
import "../style/modal.scss";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="header__modal"></div>
        <div className="modal__signUp">
          <Link to="/price">
            <button>Записатсья</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
