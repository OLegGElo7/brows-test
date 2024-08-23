import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  serviceCards: [],
  sortName: { name: "популярности" },
  sortPopup: false,
  searchValue: "",
};

const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setServiceCards(state, action) {
      state.serviceCards = action.payload;
    },
    setSortName(state, action) {
      state.sortName = action.payload;
    },
    setSortPopup(state, action) {
      state.sortPopup = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const {
  setCategoryId,
  setServiceCards,
  setSortName,
  setSortPopup,
  setSearchValue,
} = slice.actions;
export default slice.reducer;
