import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../actions/categoryActions";
import { changeLocationBarState } from "../actions/loactionBarAction";
import { getProducts } from "../actions/productActions";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

export default function Category(props) {
  const dispatch = useDispatch();

  const urlParams = props.urlParams;
  // console.log(urlParams.id);

  const categoryList = useSelector((state) => state.categories);
  const { loading, error, categories } = categoryList;

  const locationState = useSelector(state=>state.locationState);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const changeLocationState = (categoryName) =>{
    // console.log(categoryName);
    let newState = locationState;
    newState.state2=categoryName.toUpperCase();
    newState.state3="";
    dispatch(changeLocationBarState(newState));
    dispatch(getProducts(categoryName));
  }


  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="categories-section">
          <div className="categories-section-title">
            <h3>CATEGORIES</h3>
          </div>
          <div className="categories-section-list">
            <ul>
            {categories ? (
              categories.map((category) => (
                <Link key={category._id} to={`/shop/${category.name.toLowerCase()}`}>
                  <li
                    key={category._id}
                    onClick={()=>changeLocationState(category.name)}
                  >
                    {category.name}
                  </li>
                </Link>
              ))
            ) : (
              <>{error}</>
            )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

