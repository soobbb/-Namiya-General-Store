import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCounselor } from "../actions";

const CounselorList = ({ counselorList }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.tweetReducer);

  const handleButtonClick = (counselorListId) => {
    dispatch(deleteCounselor(counselorListId));
  };

  return (
    <li className="counselor" id={counselorList.id}>
      <div className="counselorList__content">
        <div className="counselorList__userInfo">
          <div className="counselorList__userInfo--wrapper">
            <span className="counselorList__title">{counselorList.title}</span>
          </div>
        </div>
        <div className="counselorList__content">{counselorList.content}</div>
        <button onClick={() => handleButtonClick(counselorList.id)}>
          삭제
        </button>
      </div>
    </li>
  );
};

export default CounselorList;
