import React, { useState } from "react";
import CounselorList from "./CounselorList";
import { useDispatch, useSelector } from "react-redux";
import { postCounselor } from "../react-toolkit/counselorSlice";

const Counselor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    console.log(state);
    return state.counselorSlice;
  });

  const handleSubmitClick = (e) => {
    // onCreate(state.title, state.content);
    dispatch(postCounselor({ title, content }));
    setTitle("");
    setContent("");
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
            value={title}
            onChange={handleChangeTitle}
          ></input>
        </div>
        <div>
          <textarea
            placeholder="your content here.."
            value={content}
            onChange={handleChangeContent}
          ></textarea>
        </div>
        <div>
          <button onClick={handleSubmitClick}>곰인나누기</button>
        </div>
      </div>
      <ul className="counselorList">
        상담리스트
        {state.counselorList.map((item, index) => {
          return <CounselorList key={index} counselorList={item} />;
        })}
      </ul>
    </React.Fragment>
  );
};

export default Counselor;
