import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductOptions from "./ProductOptions";
import ProductDetails from "./ProductDetails";
import { useDispatch, useSelector } from "react-redux";

export default function Product(props) {
  const urlParams = props.urlParams;
  // console.log(urlParams);

  return (
    <div className="product-section">
      <div className="row">
        {urlParams.id? (
          <ProductDetails id={urlParams.id}></ProductDetails>
        ) : (
          <div className="product-section-second">
            <ProductOptions></ProductOptions>
            <ProductCard urlParams = {urlParams}></ProductCard>
          </div>
         )}  
      </div>
    </div>
  );
}
