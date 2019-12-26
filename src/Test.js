import React from "react";
import { useParams } from "react-router-dom";

function Test(props) {
  let params = useParams();
  console.log("hello", params.id);

  return <div>hello</div>;
}
export default Test;
