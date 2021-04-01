import React, { useEffect, useState, useRef } from "react";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../actions/productActions";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { getLoactionBarState2 } from "../actions/loactionBarAction";
import { addToCart } from "../actions/cartActions";
import alertify from 'alertifyjs';


export default function ProductDetails(props) {
  const dispatch = useDispatch();
  const image1 = useRef();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const getSRC = (src) => {
    image1.current.src = src;
  };

  useEffect(() => {
    dispatch(getProductDetails(Number(props.id)));
  }, [dispatch, props.id]);

  const addToCartHandle = (product) =>{
    dispatch(addToCart({quantity:1,product}));
    alertify.success(product.name + " added to cart.")
  }

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : product ? (
        <div className="product-details-section">
          <div className="row row-l-s">
            <div className="col-l">
              <div className="row row-col-m-xs">
                <div className="col-m">
                  <img
                    src={product.images.image1}
                    alt={product.name}
                    className="small"
                    ref={image1}
                  />
                </div>
                <div className="col-xs">
                  <ul>
                    <li>
                      <div className="small-image-col">
                        <img
                          src={product.images.image1}
                          alt=""
                          className="small"
                          onClick={(e) => getSRC(e.target.src)}
                        />
                      </div>
                    </li>
                    <li>
                      <div className="small-image-col">
                        <img
                          src={product.images.image2}
                          alt=""
                          className="small"
                          onClick={(e) => getSRC(e.target.src)}
                        />
                      </div>
                    </li>
                    <li>
                      <div className="small-image-col">
                        <img
                          src={product.images.image3}
                          alt=""
                          className="small"
                          onClick={(e) => getSRC(e.target.src)}
                        />
                      </div>
                    </li>
                    <li>
                      <div className="small-image-col">
                        <img
                          src={product.images.image4}
                          alt=""
                          className="small"
                          onClick={(e) => getSRC(e.target.src)}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-s">
              <div className="product-name">
                <span>Product: {product.name}</span>
              </div>
              <div className="product-brand">
                <span>Brand: {product.brand}</span>
              </div>
              <div className="product-status">
                <span>
                  Status:{" "}
                  {product.countInStock > 0 ? (
                    <span className="success">In Stock</span>
                  ) : (
                    <span className="danger">Unvailable</span>
                  )}
                </span>
              </div>
              <div className="product-rating">
                <Rating rating={product.rating}></Rating>
              </div>
              <div className="product-price">
                <span>${product.price}</span>
              </div>
              <div className="product-description">
                <span>Description <i className="fas fa-file"></i></span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                architecto eveniet nulla ullam qui at facilis sit modi animi
                reprehenderit.</p>
              </div>
              {product.countInStock > 0 ? (
                <div>
                  <div className="product-button">
                    <button onClick={()=>addToCartHandle(product)}>ADD TO CART</button>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>

            {/* <!-- <div className="second-products">
                  s
                </div> --> */}
          </div>
        </div>
      ) : (
        <div>Product Not Found!</div>
      )}
    </div>
  );
}
