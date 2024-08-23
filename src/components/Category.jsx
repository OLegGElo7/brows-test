import React from "react";
import "../style/category.scss";
import { setCategoryId } from "../redux/slice";
import { useSelector, useDispatch } from "react-redux";

const Category = () => {
  const dispatch = useDispatch();
  //Категории
  const categoryId = useSelector((state) => state.slice.categoryId);
  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const nameCategory = ["Все", "Укладка", "Коррекция", "Прочее", "Депиляция"];
  return (
    <div className="category">
      <ul>
        {nameCategory.map((value, index) => (
          <li
            key={value}
            onClick={() => onClickCategory(index)}
            className={categoryId === index ? "category__active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
