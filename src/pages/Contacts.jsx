import React from "react";
import Modal from "../components/Modal";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../style/contacts.scss";

const Contacts = () => {
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
              <div className="contacts__wrapper">
                <div className="contacts__socials">
                  <div className="contacts__social">
                    <button>
                      <a href="https://vk.com/ksssenia_brows" target="_blank">
                        <img src="\img\social\VK.webp" alt="vk" />
                        <p>vk.com/ksssenia_brows</p>
                      </a>
                    </button>
                  </div>
                  <div className="contacts__social">
                    <button>
                      <a
                        href="https://www.instagram.com/ksssenia_brows?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                        target="_blank"
                      >
                        <img src="\img\social\Instagram.png" alt="inst" />
                        <p>@ksssenia_brows</p>
                      </a>
                    </button>
                  </div>
                </div>
                <div className="contacts__map">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae5e3edc3adcf21180633e2b009d30598682ccf65c85eb4a05d639ae282648de5&amp;source=constructor"
                    width="500"
                    height="400"
                    frameborder="0"
                  ></iframe>
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

export default Contacts;
