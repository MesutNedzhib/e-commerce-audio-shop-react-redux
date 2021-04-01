import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "../components/Category";
import Product from "../components/Product";
import LocationBar from "../components/LocationBar";
import { changeLocationBarState } from "../actions/loactionBarAction";
import { getProducts } from "../actions/productActions";



export default function ShopScreen(props) {

 const urlParams = props.match.params;

 const dispatch = useDispatch();

 const locationState = useSelector(state=>state.locationState); 

 useEffect(()=>{
  //  changeLocationState();
 })

const changeLocationState = () =>{
  let newState = locationState;
  newState.state1="SHOP";
  newState.state2="";
  newState.state3="";
  dispatch(changeLocationBarState(newState));
 }

  return (
    <div>
      <div className="shop-screen">
          <div className="row row-shop-screen">
            <LocationBar></LocationBar>
            <Category urlParams={urlParams}></Category>
            <Product urlParams={urlParams}></Product>          
          </div>
        </div>
    </div>
  );
}
