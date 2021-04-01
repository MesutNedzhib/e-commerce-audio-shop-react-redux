import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProductByName,
  filterProductByNameFail,
  getProducts,
  searchProduct,
  sortProducts,
} from "../actions/productActions";

export default function ProductOptions() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products);
  const { products } = productList;

  const filterByName = (word) => {
    if (word === "") {
      const categoryName = window.location.pathname.split("/");
      if (categoryName[2]) {
        dispatch(getProducts(categoryName[2]));
      } else {
        dispatch(getProducts());
      }
    } else {
      // const product = products.filter(
      //   (product) =>
      //     product.name.toLowerCase().indexOf(word.toLowerCase()) !== -1
      // );
      // dispatch(filterProductByName(product));
      dispatch(searchProduct(word));
    }
  };

  const sort = (value) => {
    if (value === "A-Z") {
      products.sort((a, b) => (a.name > b.name ? 1 : -1));
      dispatch(sortProducts(products));
    }

    if (value === "Z-A") {
      products.sort((a, b) => (a.name < b.name ? 1 : -1));
      dispatch(sortProducts(products));
    }

    if (value === "PMAX") {
      products.sort((a, b) => (a.price < b.price ? 1 : -1));
      dispatch(sortProducts(products));
    }

    if (value === "PMIN") {
      products.sort((a, b) => (a.price > b.price ? 1 : -1));
      dispatch(sortProducts(products));
    }
  };

  return (
    <div className="product-options-section">
      <div className="product-options-section-search">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search..."
          onChange={(e) => filterByName(e.target.value)}
        />
      </div>

      <div className="product-options-section-sort">
        <span>SORT</span>
        <select name="" id="" onChange={(e) => sort(e.target.value)}>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="PMAX">PRICE MAX</option>
          <option value="PMIN">PRICE MIN</option>
        </select>
      </div>
      
    </div>
  );
}
