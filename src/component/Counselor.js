import React, { useState } from "react";

const Counselor = () => {
  const onCreate  = [];
  const [state, setState] = useState({
    title: "",
    content: "",
  });

  const handleChangeState = (e) => {
    // console.log(state.title);
    // console.log(state.content);
    // console.log(e.target.name);
    // console.log(e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handSubmit = () => {
    // onCreate(state.title, state.content);
    alert("젖앙 성공");
    setState({
      title: "",
      content: "",
    });
  };

  return (
    <div className="Counselor">
      <h3>곰인</h3>
      <div>
        <input name="title" value={state.title} onChange={handleChangeState} />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={handleChangeState}
        ></textarea>
      </div>
      <div>
        <button onClick={handSubmit}>곰인나누기</button>
      </div>
    </div>
  );
};

export default Counselor;
