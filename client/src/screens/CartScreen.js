import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { addToCart, chnageCartQuantity, removeFromCart } from "../actions/cartActions";
import {Link} from 'react-router-dom'
import alertify from "alertifyjs";

export default function CartScreen() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const addToCartHandle = (value,product) => {
    dispatch(chnageCartQuantity({ quantity: Number(value), product }));
  };

  const removeFromCartHandle = (product) =>{
    dispatch(removeFromCart(product));
    alertify.error(product.name + " was deleted!");
  }


  return (
    <div className="cart-screen-container">
      <div className="row row-cart-screen-container">
        <div className="cart-screen-title">
          <h2>SHOP SCREEN</h2>
        </div>
        
        
        {cart.length > 0 ? (
          <div className="cart-vendor">
            <ul>
              {cart ? (
                cart.map((cartItem) => (
                  <li key={cartItem.product._id}>
                    <div className="cart-vendor-details">
                      <div className="row row-cart-vendor-details">
                        <div className="cart-vendor-details-product-image">
                          <img
                            src={cartItem.product.images.image1}
                            alt=""
                            className="small"
                          />
                        </div>

                        <div className="cart-vendor-details-product-details">
                          <div className="product-name">
                            <span>{cartItem.product.name}</span>
                          </div>
                          <div className="product-status">
                            <span>Status: In Stock</span>
                            <br />
                            <span>Warranty: 24 months</span>
                          </div>
                        </div>

                        <div className="cart-vendor-details-product-stock">
                          <select value={cartItem.quantity} onChange={(e)=>addToCartHandle(e.target.value,cartItem.product)} >
                          {[...Array(cartItem.product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                          </select>
                        </div>
                        <div className="cart-vendor-details-product-price">
                          <span>${cartItem.product.price}</span>
                          <div className="remove">
                            <span onClick={()=>removeFromCartHandle(cartItem.product)}>Remove</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <></>
              )}
            </ul>
            <div className="cart-vendor-total">
              <div className="total-left-side">
                <span>Total: </span>
              </div>
              <div className="total-right-side">
                <span>
                  $
                  {cart.reduce((a, c) => a + c.product.price * c.quantity, 0) <=
                  1000
                    ? cart
                        .reduce((a, c) => a + c.product.price * c.quantity, 0)
                        .toPrecision(5)
                    : cart
                        .reduce((a, c) => a + c.product.price * c.quantity, 0)
                        .toPrecision(6)}
                </span>
              </div>
            </div>
          </div>
        ) : (
            <div className="card-vendor-empty">
            <span>CART IS EMPTY! <Link to="/shop">BACK TO SHOP</Link></span>
            </div>
        )}

        {cart.length > 0 ? (
          <div className="cart-vendor-summary">
            <div className="cart-vendor-summary-info">
              <div className="cart-vendor-summary-info-title">
                Order
                <br />
                Information
              </div>
              <div className="cart-vendor-summary-info-details">
                <div className="total-price">
                  <div className="left-side">All Products:</div>
                  <div className="right-side summary-info">${cart.reduce((a, c) => a + c.product.price * c.quantity, 0) <=
                  1000
                    ? cart
                        .reduce((a, c) => a + c.product.price * c.quantity, 0)
                        .toPrecision(5)
                    : cart
                        .reduce((a, c) => a + c.product.price * c.quantity, 0)
                        .toPrecision(6)}</div>
                </div>
                <div className="delivery">
                  <div className="left-side">Delivery fee:</div>
                  <div className="right-side delivery-info">FREE</div>
                </div>
              </div>
            </div>
            <hr />
            <div className="cart-vendor-summary-price">
              <div className="cart-vendor-summary-price-title">
                <div>
                  <span>ALL:</span>
                </div>
                <div>
                  <span>${cart.reduce((a, c) => a + c.product.price * c.quantity, 0) <=
                  1000
                    ? cart
                        .reduce((a, c) => a + c.product.price * c.quantity, 0)
                        .toPrecision(5)
                    : cart
                        .reduce((a, c) => a + c.product.price * c.quantity, 0)
                        .toPrecision(6)}</span>
                </div>
              </div>
              <div className="cart-vendor-summary-price-button">
                <button>CONTINUE</button>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
