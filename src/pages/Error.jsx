import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="main">
      <section className="home">
        <div className="home__background">
          <div className="home__wrapper">
            <div className="wrapper">
              <div className="home__title">
                <h1> Бровист | Челябинск</h1>
                <p>Красивые брови - залог хорошего настроения</p>
              </div>
              <div className="Error">
                <h2>Вы перешли на несуществующую страницу!</h2>
              </div>
            </div>
            <div className="home__button">
              <Link to="/">
                <button>На главную</button>
              </Link>
            </div>
            <div className="background"></div>
            <div className="background"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Error;
