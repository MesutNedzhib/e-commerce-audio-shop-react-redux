import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  changeProducts,
  getProducts,
  searchProduct
} from "../actions/productActions";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";


export default function ProductsByCategory(props) {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products);

  const categoryName = props.categoryName;
  
  const { loading, error, products } = productList;



  useEffect(() => {
    if(props.word){
      console.log(props.word);
      dispatch(searchProduct(props.word));
    }else{
      dispatch(getProducts(categoryName));
    }
    
  }, [dispatch,categoryName,props.word]);

  const sort = (value) => {

    if (value === "A") {
      products.sort((a, b) => (a.name > b.name ? 1 : -1));
      dispatch(changeProducts(products));
    }

    if (value === "Z") {
      products.sort((a, b) => (a.name < b.name ? 1 : -1));
      dispatch(changeProducts(products));
    }

    if (value === "PMAX") {
      products.sort((a, b) => (a.price < b.price ? 1 : -1));
      dispatch(changeProducts(products));
    }

    if (value === "PMIN") {
      products.sort((a, b) => (a.price > b.price ? 1 : -1));
      dispatch(changeProducts(products));
    }
  };

  const search = (word) => {
    if(word === ""){

    }else{
      dispatch(searchProduct(word));
    }
      
  };

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className="product-options">
            <div className="search">
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => search(e.target.value)}
              />
            </div>

            <div className="sort-by">
              <h4>Sort</h4>
              <select name="" onChange={(e) => sort(e.target.value)}>
                <option value="A" >A-Z</option>
                <option value="Z" >Z-A</option>
                <option value="PMAX">Price +</option>
                <option value="PMIN">Price -</option>
              </select>
            </div>
          </div>
          <div className="products">
            <div className="row products">
              {products ? (
                products.map((product) => (
                  <div className="card" key={product._id}>
                    <Link to={`product/${product._id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="medium"
                      />
                    </Link>
                    <div className="card-body">
                      <Rating rating={product.rating}></Rating>

                      <div className="title">
                        <Link to={`product/${product._id}`}>
                          <span>{product.name}</span>
                        </Link>
                      </div>

                      <div className="price">
                        <span>${product.price}</span>
                      </div>

                      <div className="buy">
                        <button type="button">
                          <i className="fas fa-shopping-basket"></i>
                          <span>Buy</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <>Product Not Found</>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
