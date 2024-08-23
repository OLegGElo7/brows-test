import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Category from "../components/Category";
import Sort from "../components/Sort";
import { useSelector, useDispatch } from "react-redux";
import { setServiceCards } from "../redux/slice";
import axios from "axios";
import "../style/service.scss";
import { useSortBrows } from "../hooks/useSortBrows";
import CardService from "../components/CardService";
import Skelet from "../components/Skelet";
import Search from "../components/Search";

const Service = () => {
  const dispatch = useDispatch();

  //Категории
  const categoryId = useSelector((state) => state.slice.categoryId);

  //Карточки услуг
  const serviceCards = useSelector((state) => state.slice.serviceCards);

  // сортировка
  const { isDescSort, setIdDescSort, sortedPrice } = useSortBrows(
    serviceCards || []
  );

  const sortPrice = () => {
    setIdDescSort(!isDescSort);
  };

  // Поиск
  const searchValue = useSelector((state) => state.slice.searchValue);

  //скелетон
  const [isLoading, setIsLoading] = useState(true);

  const skelet = [...new Array(6)].map((skelet, index) => (
    <Skelet key={index}></Skelet>
  ));

  const CardsState = sortedPrice
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    })
    .map((item) =>
      item.categories === categoryId || categoryId === 0 ? (
        <CardService title={item.title} img={item.img} price={item.price} />
      ) : (
        <></>
      )
    );

  //Запрос

  useEffect(() => {
    axios
      .get("https://656b3f1cdac3630cf727e4e7.mockapi.io/Brows")
      .then((response) => response.data)
      .then((arrBrows) => {
        dispatch(setServiceCards(arrBrows));
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="home">
      <section className="home__background">
        <div className="home__wrapper">
          <Modal />
          <Header />
          <div className="wrapper">
            <Search />
            <div className="price__title">
              <Category />
              <Sort sortPrice={sortPrice} />
            </div>
            <div className="price__wrapper">
              <div className="price__cards">
                {isLoading ? skelet : CardsState}
              </div>
            </div>
          </div>
          <div className="home__button price__buttons">
            <Link to="/">
              <button className="price__button">На главную</button>
            </Link>
            <Link to="/contacts">
              <button className="price__button">Контакты </button>
            </Link>
          </div>
          <div className="background"></div>
          <div className="background-2"></div>
          <Footer />
        </div>
      </section>
    </main>
  );
};

export default Service;
