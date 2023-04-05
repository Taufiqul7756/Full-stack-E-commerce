import React from "react";
import "./Categories.scss";
const Categories = () => {
  return (
    <div className="category">
      <div className="col">
        <div className="row">R1</div>
        <div className="row">R2</div>
      </div>
      <div className="col">
        <div className="row">r3</div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">r4</div>
          </div>
          <div className="col">
            <div className="row">r5</div>
          </div>
        </div>
        <div className="row">r6</div>
      </div>
    </div>
  );
};

export default Categories;
