import React, { useState, useEffect } from "react";
import '../styles/products.scss';
import ProductDetail from "./ProductDetail";

function ProductsView() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // the empty deps array [] means this useEffect will run once
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
    return <div>Loading...</div>;
  } else {
    return (
      // <div>Products
      //   <ul>
      //     {items.map(item => (
      //       <li key={item.id}>
      //         {item.name} {item.price}
      //       </li>
      //     ))}
      //   </ul>
      // </div>
      <div>
        <div className="products-title">
          <h4>Products</h4>
        </div>
        <br />
        <div className="products-list">
          {items && items.length ? (
            items.map((item, index) => (
              <ProductDetail
                product={item}
                key={index}
              />
            ))
          ) : (
            <div className="nothing">
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
