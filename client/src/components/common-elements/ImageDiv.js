import React from "react";

const ImageDiv = (props) => {
  return (
    <div className="imgBx">
      <img src={props.img} alt="registration logo" />
    </div>
  );
};

export default ImageDiv;
