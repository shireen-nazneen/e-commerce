import React from "react";
import { Link } from "react-router-dom";

const Categories = (props) => {

  return (
    <>
      <div className="d-flex justify-content-center">
        <Link
          style={{borderRadius:20}}className="shadow-sm btn btn-light m-1 text-capitalize"
          to={"/home/all"}
        >
          All
        </Link>
        {props.categories.map((item, i) => {
          return (
            <Link
              style={{borderRadius:20}}className="shadow-sm btn btn-light m-1 text-capitalize"
              key={i}
              to={"/home/" + item}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
