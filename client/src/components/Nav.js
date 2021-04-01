import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchProduct } from "../actions/productActions";
import { changeLocationBarState } from "../actions/loactionBarAction";
import { removeFromCart } from "../actions/cartActions";
import alertify from "alertifyjs";

export default function Nav() {
  const dispatch = useDispatch();
  const [word, setWord] = useState("");
  const inputSearch = useRef();

  const locationState = useSelector((state) => state.locationState);
  const cart = useSelector((state) => state.cart);

  const checkStateWithCategoryName = () => {
    let newState = locationState;
    newState.state1 = "SHOP";
    newState.state2 = locationState.state2;
    newState.state3 = "";
    dispatch(changeLocationBarState(newState));
  };

  const findProduct = (word) => {
    dispatch(searchProduct(word));
  };

  const clearInput = () => {
    inputSearch.current.value = "";
    setWord("");
  };

  const removeFromCartHandle = (product) => {
    dispatch(removeFromCart(product));
    alertify.error(product.name + " was deleted!");
  };

  return (
    <div className="nav-container">
      <div className="row row-quick">
        <div className="social-logos">
          <ul>
            <li>
              <div className="facebook-log">
                <i class="fab fa-facebook-f"></i>
              </div>
            </li>
            <li>
              <div className="instagram-log">
                <i class="fab fa-instagram"></i>
              </div>
            </li>
            <li>
              <div className="youtube-log">
                <i class="fab fa-youtube"></i>
              </div>
            </li>
          </ul>
          <div className="audio-container">
            <audio
              controls
              src="http://193.108.24.21:8000/fresh?file=.mp3%22"
              loop="loop"
            ></audio>
          </div>
        </div>

        <div className="nav-quick-right-side">
          <div className="call">
            <i class="fas fa-phone-alt"></i>
            <span>879-677-987</span> / <span> 789-235-781</span>
          </div>
        </div>
      </div>

      <nav className="row row-nav-small">
        <div className="left-side">
          <div>
            <Link to="/">
              <img
                src="https://i.ibb.co/nfLSHYD/Logo-My-Audio.png"
                alt="logo-my-audio"
                className="logo"
              />
            </Link>
          </div>
          <div>
            <ul>
              <Link to="/">
                <li>HOME</li>
              </Link>
              <Link to="/shop">
                <li
                  className="shop-text"
                  onClick={() => checkStateWithCategoryName()}
                >
                  SHOP
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="center-side">
          <input
            type="text"
            placeholder="Search..."
            id="input-text"
            ref={inputSearch}
            //   value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          {word ? (
            <div className="clear-input">
              <i className="fas fa-times" onClick={() => clearInput()}></i>
            </div>
          ) : (
            <></>
          )}

          <Link to={`/shop`}>
            <i onClick={() => findProduct(word)} className="fas fa-search"></i>
          </Link>
          <div className="dropdown-search">
            <div className="dropdown-search-empty"></div>

            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>

        <div className="right-side">
          <ul>
            <li>
              {cart.length > 0 ? (
                <div className="dropdown">
                  <div className="cart-icon">
                    <Link to="/cart">
                      <i className="fas fa-cart-plus"></i> -{" "}
                      <span className="countCart">{cart.length}</span>
                    </Link>
                  </div>
                  <div className="dropdown-content">
                    <ul>
                      {cart ? (
                        cart.map((cartItem) => (
                          <li key={cartItem.product._id}>
                            <div className="cartItem">
                              <div className="cartItem-col-image">
                                <img
                                  src={cartItem.product.images.image1}
                                  alt={cartItem.product.name}
                                  className="small"
                                ></img>
                              </div>
                              <div className="cartItem-name">
                                <span>{cartItem.product.name}</span>
                              </div>
                              <div className="cartItem-quantity">
                                <span>x{cartItem.quantity}</span>
                              </div>
                              <div className="cartItem-price">
                                <span>${cartItem.product.price}</span>
                                <div className="cartItem-remove">
                                  <button
                                    onClick={() =>
                                      removeFromCartHandle(cartItem.product)
                                    }
                                  >
                                    REMOVE
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))
                      ) : (
                        <></>
                      )}
                    </ul>
                    <div className="total">
                      <div className="currentQuantity">
                        <h4>Total:</h4>
                        <span>{cart.reduce((a, c) => a + c.quantity, 0)}</span>
                      </div>
                      <div className="currentTotal">
                        <span>
                          $
                          {cart.reduce(
                            (a, c) => a + c.product.price * c.quantity,
                            0
                          ) <= 1000
                            ? cart
                                .reduce(
                                  (a, c) => a + c.product.price * c.quantity,
                                  0
                                )
                                .toPrecision(5)
                            : cart
                                .reduce(
                                  (a, c) => a + c.product.price * c.quantity,
                                  0
                                )
                                .toPrecision(6)}
                        </span>
                      </div>
                    </div>
                    <div className="go-cart">
                      <Link to="/cart">
                        <button>GO CART</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="dropdown2">
                  <div className="cart-icon">
                    <Link to="/cart">
                      {" "}
                      <i className="fas fa-cart-plus"></i>
                    </Link>

                    <div className="emptyCart">
                      <span>CART IS EMPTY</span>
                      <div className="go-cart">
                        <Link to="/cart">
                          <button>GO CART</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <div className="my-account">
                <Link to="/">
                  {" "}
                  MY ACCOUNT <i className="fas fa-user-circle"></i>{" "}
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
