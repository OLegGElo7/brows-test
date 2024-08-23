import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortName, setSortPopup } from "../redux/slice";
import "../style/sort.scss";

const Sort = ({ sortPrice, sortPopular }) => {
  const nameList = [
    {
      name: "популярности",
      onClickNameList: (obj) => {
        dispatch(setSortName(obj));
        dispatch(setSortPopup(false));
      },
    },
    {
      name: "цене",
      onClickNameList: (obj) => {
        dispatch(setSortName(obj));
        dispatch(setSortPopup(false));
        sortPrice(obj);
      },
    },
    {
      name: "алфавиту",
      onClickNameList: (obj) => {
        dispatch(setSortName(obj));
        dispatch(setSortPopup(false));
      },
    },
  ];

  const dispatch = useDispatch();
  const sortName = useSelector((state) => state.slice.sortName);
  const sortPopup = useSelector((state) => state.slice.sortPopup);

  return (
    <div className="sort">
      <div className="sort__wrapper">
        <div className="sort__label">Сортировать по:</div>
        <div className="sort__category">
          <span onClick={() => dispatch(setSortPopup(!sortPopup))}>
            {sortName.name}
          </span>
          {sortPopup && (
            <div className="sort__popup">
              <ul>
                {nameList.map((obj) => (
                  <li
                    onClick={() => {
                      obj.onClickNameList(obj);
                    }}
                    className={sortName.name === obj.name ? "sort__active" : ""}
                  >
                    {obj.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sort;
