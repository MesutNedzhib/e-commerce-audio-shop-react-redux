import React from "react";
import {Link} from 'react-router-dom'

export default function HomeScreen() {
  return (
    <div>
      <div className="home-section">
        <div className="row home-section-row">
          <div className="home-section-text">
            <p>
              GET <span>%50</span> off your first shopping with
              <br />
              <span>MY AUDIO</span> online shop
            </p>
          </div>

          <div className="home-section-button">
            <Link to="/shop"><button>SHOP NOW</button></Link>
          </div>
        </div>
      </div>

      {/* <div className="latest-products-section">
        <div className="row">
          <div className="latest-products-section-title">
            <h2>LATEST PRODUCTS</h2>
          </div>
          <div className="latest-products-section-body">
            <div className="row row-latest-products-section-body">
              <div className="latest-products-section-body-col">
                <div className="latest-products-section-body-col-img">
                  <img
                    src="./images/product-1-CD-Player.jpg"
                    alt=""
                    className="small"
                  />
                </div>
                <div className="latest-products-section-body-col-title">
                  <span>PRODUCT NAME</span>
                </div>
                <div className="latest-products-section-body-col-button">
                  <button>View</button>
                </div>
              </div>

              <div className="latest-products-section-body-col">
                <div className="latest-products-section-body-col-img">
                  <img
                    src="./images/product-1-CD-Player.jpg"
                    alt=""
                    className="small"
                  />
                </div>
                <div className="latest-products-section-body-col-title">
                  <span>PRODUCT NAME</span>
                </div>
                <div className="latest-products-section-body-col-button">
                  <button>View</button>
                </div>
              </div>

              <div className="latest-products-section-body-col">
                <div className="latest-products-section-body-col-img">
                  <img
                    src="./images/product-1-CD-Player.jpg"
                    alt=""
                    className="small"
                  />
                </div>
                <div className="latest-products-section-body-col-title">
                  <span>PRODUCT NAME</span>
                </div>
                <div className="latest-products-section-body-col-button">
                  <button>View</button>
                </div>
              </div>

              <div className="latest-products-section-body-col">
                <div className="latest-products-section-body-col-img">
                  <img
                    src="./images/product-1-CD-Player.jpg"
                    alt=""
                    className="small"
                  />
                </div>
                <div className="latest-products-section-body-col-title">
                  <span>PRODUCT NAME</span>
                </div>
                <div className="latest-products-section-body-col-button">
                  <button>View</button>
                </div>
              </div>

              <div className="latest-products-section-body-col">
                <div className="latest-products-section-body-col-img">
                  <img
                    src="./images/product-1-CD-Player.jpg"
                    alt=""
                    className="small"
                  />
                </div>
                <div className="latest-products-section-body-col-title">
                  <span>PRODUCT NAME</span>
                </div>
                <div className="latest-products-section-body-col-button">
                  <button>View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
