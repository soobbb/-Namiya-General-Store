import { createSlice } from "@reduxjs/toolkit";
// import initialState  from "./reducers/initialState";

export const initialState = {
  counselorList: [
    {
      id: 1,
      title: "리엑트 넘우 어려워요ㅜㅜ",
      content: "얻엏에 공부해야 해요?ㅜ",
    },
    {
      id: 5,
      title: "me is so easy",
      content: "so easy",
    },
    {
      id: 2,
      title: "weather is fucking so good",
      content: "real good",
    },
  ],
};

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
