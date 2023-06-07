import React from "react";
import { Provider } from "react-redux";
import store from "./react-toolkit/store";
import Counselor from "./components/Counselor";

function App() {
  return (
    <div className="App">
      <h1>남이야 잡화점</h1>
      <Counselor />
      {/* <CounselorList/> */}
    </div>
  );
}
export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
