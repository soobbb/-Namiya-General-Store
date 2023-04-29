import React, { useState } from "react";
import CounselorList from "./CounselorList";
import { useDispatch, useSelector } from "react-redux";
import { postCounselor } from "../actions";

const Counselor = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.counselorReducer);

  // const [id, setId] = useState("1");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // const handleChangeState = (e) => {};

  const handSubmitClick = (e) => {
    // onCreate(state.title, state.content);
    dispatch(postCounselor(title, content));
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="Counselor">
        <h3>고민</h3>
        <div>
          <input
            type="text"
            placeholder="your title here.."
            onChange={handleChangeTitle}
          ></input>
        </div>
        <div>
          <textarea
            placeholder="your content here.."
            onChange={handleChangeContent}
          ></textarea>
        </div>
        <div>
          <button onClick={handSubmitClick}>곰인나누기</button>
        </div>
      </div>
      <ul className="counselorList">
        {state.counselorList.map((item, index) => {
          return <CounselorList key={index} counselorList={(item)} />;
        })}
      </ul>
    </React.Fragment>
  );
};

export default Counselor;
