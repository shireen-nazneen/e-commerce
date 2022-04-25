import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Product = ({ item }) => {
  return (
    <div className="col-sm-6 col-md-3 col-lg-3">
      <div className="p-1  shadow-sm rounded">
        <div className="p-1 d-flex justify-content-center">
          <Link to={`/product/${item?.id}`}>
            <img
              src={item?.image}
              className="card-img-top"
              alt={item?.id}
            />
          </Link>
        </div>
        <div className="card-body">
          <p className="card-text  text-truncate align-items-center">
            {item?.title}
          </p>
          <div className="d-flex justify-content-between">
            <div><span>Rs {item?.price} /-</span> </div>
            <button style={{ borderRadius: 20 }} className="btn btn-warning">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
