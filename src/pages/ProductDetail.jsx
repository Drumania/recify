import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { movieSlug } = useParams();

  return <div>{movieSlug}</div>;
};

export default ProductDetail;
