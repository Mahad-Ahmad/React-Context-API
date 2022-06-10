import React, { useContext } from "react";
import UserContext from "./userContext";
import ProductContext from "./productContext";

function MovieRow(props) {
  const userContext = useContext(UserContext);
  const productContext = useContext(ProductContext);
  console.log("pro", productContext);

  return (
    <>
      <div className="m-3 mt-0">
        Movie Row {userContext.currentUser ? userContext.currentUser.name : ""}
      </div>
      <div className="m-3 mt-0">Products{productContext.product}</div>
    </>
  );
}

export default MovieRow;
