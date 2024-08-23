import React from "react";
import Modal from "../components/Modal";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../style/home.scss";

const Home = () => {
  return (
    <main className="main">
      <section className="home">
        <div className="home__background">
          <div className="home__wrapper">
            <Modal />
            <Header />
            <div className="wrapper">
              <div className="home__title">
                <h1> Бровист | Челябинск</h1>
                <p>Красивые брови - залог хорошего настроения</p>
              </div>
              <div className="home__wrapper-about">
                <div className="home__title-about">
                  <h2>
                    Привет Меня зовут Ксения, я являюсь мастером по оформлению
                    бровей <br />
                    Если ты хочешь: <br />
                    - Не «шаблонные» брови <br />
                    - Отрастить и иметь форму, которая подойдет именно тебе,
                    тогда ты по адресу😎 <br />
                    Спектр услуг: <br />
                    - Долговременная укладка <br />
                    - Окрашивание
                    <br />
                    бровей краской, хной
                    <br />
                    - Коррекция воском и пинцетом
                    <br />
                    Дополнительные услуги: <br />
                    - Счастье для бровей от Nikk Mole
                    <br />- Депиляция носогубной зоны
                  </h2>
                </div>
                <div className="home__cards">
                  <div className="home__card-1">
                    <img src="\img\homecards\about.jpg"></img>
                  </div>
                  <div className="home__card-2">
                    <img src="\img\homecards\about.jpg"></img>
                  </div>
                  <div className="home__card-3">
                    <img src="\img\homecards\about.jpg"></img>
                  </div>
                  <div className="home__card-4">
                    <img src="\img\homecards\about.jpg"></img>
                  </div>
                  <div className="home__card-5">
                    <img src="\img\homecards\about.jpg"></img>
                  </div>
                  <div className="home__card-6">
                    <img src="\img\homecards\about.jpg"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="home__button">
              <Link to="/price">
                <button>Прайс</button>
              </Link>
            </div>
            <div className="background"></div>
            <div className="background-2"></div>
            <Footer />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
