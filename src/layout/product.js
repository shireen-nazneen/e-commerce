import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Product = () => {
  const { productid } = useParams();
  const [product, setproduct] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getproduct = async () => {
    const response = await axios(
      `https://fakestoreapi.com/products/${productid}`
    );
    setproduct(response?.data);
  };
  useEffect(() => {
    if (product === null) {
      getproduct();
    }
  }, [product, getproduct]);
  return (
    <div className="container">
      <div className="row shadow-sm p-2">
        <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="d-flex justify-content-center">
            <img
              src={product?.image}
              style={{ width: '60%', objectFit: 'contain' }}
              // className="card-img-top"
              alt={product?.id}
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h4 className="card-title">{product?.title}</h4>
          <p className="card-text">{product?.description}</p>

          <div className="d-flex justify-content-between">
            <div>Rs. {product?.price}/-</div>

            <div>
              <button className="btn btn-warning" style={{ marginRight: 10 }}>Add to cart</button>
              <button className="btn btn-success">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
