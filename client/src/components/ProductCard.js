import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  changeProducts,
  getProductDetails,
  getProducts,
  searchProduct,
} from "../actions/productActions";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { changeLocationBarState } from "../actions/loactionBarAction";
import { addToCart } from "../actions/cartActions";
import alertify from "alertifyjs";

export default function ProductCard(props) {
  const dispatch = useDispatch();
  const urlParams = props.urlParams;

  const productList = useSelector((state) => state.products);
  const { loading, error, products } = productList;

  const locationState = useSelector((state) => state.locationState);

  

  useEffect(() => {
    if (urlParams.categoryName) {
      changeLocationState(urlParams.categoryName);
      dispatch(getProducts(urlParams.categoryName));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch]);

  const getProduct = (product) => {
    let newState = locationState;
    newState.state2 = product.categoryName.toUpperCase();
    newState.state3 = product.name.toUpperCase();
    dispatch(changeLocationBarState(newState));
  };

  const changeLocationState = (categoryName) => {
    let newState = locationState;
    newState.state2 = categoryName.toUpperCase();
    newState.state3 = "";
    dispatch(changeLocationBarState(newState));
  };

  const addToCartHandle = (product) => { 
    dispatch(addToCart({ quantity: 1, product }));
    alertify.success(product.name + " added to cart.");
  };

  return (
    <div className="row row-product-card">
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger"></MessageBox>
      ) : products ? (
        products.map((product) => (
          <div key={product._id}>
            <ul key={product._id}>
              <li key={product._id}>
                <div className="card" key={product._id}>                 
                  {
                    product.countInStock>0?
                    <div className="stock"></div>:<div className="stock color"></div>
                  }         
                  <Link to={`/product/${product._id}`}>
                    <img
                      src={product.images.image1}
                      alt=""
                      className="medium"
                      onClick={() => getProduct(product)}
                    />
                  </Link>
                  <div className="card-body">
                    <Rating rating={product.rating}></Rating>

                    <div className="title">
                      <a href="">
                        <span>{product.name}</span>
                      </a>
                    </div>

                    <div className="price">
                      <span>${product.price}</span>
                    </div>
                    {product.countInStock > 0 ? (
                      <div className="buy">
                        <button
                          type="button"
                          onClick={() => addToCartHandle(product)}
                        >
                          <i className="fas fa-shopping-basket"></i>
                          <span>Buy</span>
                        </button>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        ))
      ) : (
        <div>Product Not Found</div>
      )}
    </div>
  );
}
