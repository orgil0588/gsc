import React from "react";

function Container(props) {
  return (
    <div className="mx-4 sm:mx-8 md:mx-20 lg:mx-24 xl:mx-40">
      {props.children}
    </div>
  );
}

export default Container;
