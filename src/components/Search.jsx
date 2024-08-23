import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../redux/slice";
import "../style/search.scss";

const Search = () => {
  // Поиск
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.slice.searchValue);

  return (
    <div className="search">
      <input
        value={searchValue}
        onChange={(event) => dispatch(setSearchValue(event.target.value))}
        placeholder="Поиск услуг..."
      ></input>
      {searchValue && (
        <img
          src="/img/search/3669378_clear_ic_icon.svg"
          onClick={() => dispatch(setSearchValue(""))}
        ></img>
      )}
    </div>
  );
};

export default Search;
