import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLoactionBarState } from "../actions/loactionBarAction";
import { getProducts } from "../actions/productActions";
import { changeLocationBarState } from "../actions/loactionBarAction";

export default function LocationBar() {
  const dispatch = useDispatch();

  const locationState = useSelector((state) => state.locationState);

  useEffect(() => {
    if(locationState.state3){
      // Empty
    }else{
      dispatch(getLoactionBarState());
    }
    
  }, [dispatch]);

  const changeLocationState = () => {
    let newState = locationState;
    newState.state1 = "SHOP";
    newState.state2 = "";
    newState.state3 = "";
    dispatch(changeLocationBarState(newState));
    dispatch(getProducts());
  };

  const checkStateWithCategoryName = () => {
    let newState = locationState;
    newState.state1 = "SHOP";
    newState.state2 = locationState.state2;
    newState.state3 = "";
    dispatch(changeLocationBarState(newState));  
  }

  return (
    <div className="location-section">
      <ul>
        <Link to="/">
          <li>
            <i className="fas fa-home"></i>
            <span>/</span>
          </li>
        </Link>

        {locationState.state1 ? (
          <Link to="/shop">
            {" "}
            <li onClick={() => changeLocationState()}>
              {locationState.state1}
              <span>/</span>
            </li>
          </Link>
        ) : (
          <></>
        )}
        {locationState.state2 ? (
          <Link to={`/shop/${locationState.state2.toLowerCase()}`}>
            <li onClick={() => checkStateWithCategoryName()}>
              {locationState.state2}
              <span>/</span>
            </li>
           </Link>
        ) : (
          <></>
        )}
        {locationState.state3 ? (
          <li>
            {locationState.state3}
            <span>/</span>
          </li>
        ) : (
          <></>
        )}

      </ul>
    </div>
  );
}
