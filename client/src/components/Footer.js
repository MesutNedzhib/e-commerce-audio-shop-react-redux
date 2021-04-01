import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="footer-container">
        <div className="row row-footer">
          <div className="footer-col">
            <div className="footer-col-title">
              <span>EXTRAS</span>
            </div>
            <ul>
              <li>Brands</li>
              <li>Gift Certificates</li>
              <li>Affiliate</li>
              <li>Specials</li>
              <li>Site Map</li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">
              <span>INFORMATION</span>
            </div>
            <ul>
              <li>About Us</li>
              <li>Private Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
              <li>Site Map</li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">
              <span>MY ACCOUNT</span>
            </div>
            <ul>
              <li>My Account</li>
              <li>Order History</li>
              <li>Wish List</li>
              <li>Newsletter</li>
              <li>Returns</li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">
              <span>CONTACT US</span>
            </div>
            <ul>
              <li>Street: Studentska 1</li>
              <li>Varna, Bulgaria</li>
              <li>student@gmail.com</li>
              <li>456-456-4512</li>
              <li>789-789-4562</li>
            </ul>
          </div>
        </div>
      </div>

      <hr></hr>
      <div className="footer-copyright">
        <span>© MESUT NEDZHIB</span>
      </div>
    </div>
  );
}
