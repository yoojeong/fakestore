import React from "react";
import { useLocation } from 'react-router-dom';
import '../styles/productdetail.scss';

function ProductDetail() {
  const location = useLocation();
  const item = location.state.product;

  return (
    <div className="product-detail">
      {item.title}
      Inside detail!
    </div>
  );
}

export default ProductDetail;
