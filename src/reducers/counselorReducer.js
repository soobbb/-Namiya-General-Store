import { DELETE, POST } from "../actions";
import { initialState } from "./initialState";

const counselorReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST:
      const newCounselor = {
        id: state.counselorList.length + 1,
        title: action.payload.title,
        content: action.payload.content,
      };
      return {
        ...state,
        counselorList: [newCounselor, ...state.counselorList],
      };
    case DELETE:
      return {
        ...state,
        counselorList: state.counselorList.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
export default counselorReducer;
