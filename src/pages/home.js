import Homelayout from "../layout/home";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Homepage = (props) => {
  let { category } = useParams();

  const [categories, setcategories] = useState([]);
  const [Products, setProducts] = useState([]);

  const getcategories = async () => {
    const response = await axios(
      "https://fakestoreapi.com/products/categories"
    );
    setcategories(response?.data);
  };


  const getAllProducts = async () => {
    const response = await axios(
      "https://fakestoreapi.com/products"
    );
    setProducts(response?.data);
  };

  const getProductsByCategory = async () => {
    const response = await axios(
      `https://fakestoreapi.com/products/category/${category}`
    );
    setProducts(response?.data);
  };


  useEffect(() => {
    getcategories();
  }, [])

  useEffect(() => {
    if (category === 'all' || category === undefined) {
      getAllProducts()
      // getcategories()
    } else {
      getProductsByCategory()
    }
  }, [category]);

  return (
    <div>
      <Homelayout Products={Products} categories={categories} />
    </div>
  );
};
export default Homepage;
