import React from "react";
import CommentDetail from "./CommentDetail";
import "./styles/tailwind.css";

function App() {
  return (
    <>
      <CommentDetail
        commentor="Dave"
        date="13 November 2022, at 15:20"
        text="That was great! ty"
      />
      <CommentDetail
        commentor="_the_swinging_beast"
        date="13 November 2022, at 15:55"
        text="I kinda like it."
      />
      <CommentDetail
        commentor="al dente master"
        date="14 November 2022, at 10:33"
        text="Something else for sure!."
      />
    </>
  );
}
export default App;
