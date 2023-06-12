import { createSlice } from "@reduxjs/toolkit";
// import initialState  from "./reducers/initialState";

export const initialState = {
  counselorList: [
    {
      id: 1,
      title: "리엑트 너무 어려워요ㅜㅜ",
      content: "어떻게 공부해야 해요?ㅜ",
    },
    {
      id: 5,
      title: "me is so easy",
      content: "so easy",
    },
    {
      id: 2,
      title: "weather is so good",
      content: "real good",
    },
  ],
};

// const getProducts = () => {
//   fetch(`http://cozshopping.codestates-seb.link/api/v1/products?`)
//     .then((res) => res.json())
//     .then((data) => {
//       setItems(data.map((item) => ({ ...item, bookmark: false })));
//     });
// };


const counselorSlice = createSlice({
  name: "counselorSlice",
  initialState: initialState,
  reducers: {
    postCounselor: (state, action) => {
      const newCounselor = {
        id: state.counselorList.length + 1,
        title: action.payload.title,
        content: action.payload.content,
      };
      state.counselorList.unshift(newCounselor);
    },
    deleteCounselor: (state, action) => {
      state.counselorList = state.counselorList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export default counselorSlice;
export const { postCounselor, deleteCounselor } = counselorSlice.actions;
