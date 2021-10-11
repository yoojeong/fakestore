import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import '../styles/productsview.scss';

function ProductsView() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("");

  // the empty deps array [] means this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <h1 className="products-loading">Loading...</h1>;
  } else {
    function handleChangeCategory(event) {
      setCategory(event.target.value);
    }

    return (
      <div>
        <h1 className="products-title">Products</h1>

        <div className="sort">
          <div className="collection-sort">
            <label>Filter by:</label>
            <select value={category} onChange={handleChangeCategory}>
              <option value="">Select</option>
              <option value="men's clothing">men's clothing</option>
              <option value="jewelery">jewelery</option>
              <option value="electronics">electronics</option>
              <option value="women's clothing">women's clothing</option>
            </select>
          </div>

          <div className="collection-sort">
            <label>Sort by:</label>
            <select>
              <option value="/">Featured</option>
            </select>
          </div>
        </div>

        <div className="products-list">
          {items && items.length ? (
            items
              .filter(
                (item) =>
                  category === item.category || category === ""
              )
              .map((item, index) => (
                <ProductCard
                  key={index}
                  product={item}
                />
              ))

            // without filter by category
            // items.map((item, index) => (
            //   <ProductCard
            //     product={item}
            //     key={index}
            //   />
            // ))
          ) : (
            <div className="products-not-found">
              <span>
                No products found!
              </span>
            </div>
          )}
        </div>

      </div>
    );
  }
}

export default ProductsView;
