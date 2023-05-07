import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductCard = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-card bg-white shadow-md p-6 rounded-md">
      <img className="w-full h-56 object-cover rounded-md mb-4" src={product.image} alt={product.title} />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{product.description}</p>
      <p className="text-xl font-semibold">Price: ${product.price}</p>
    </div>
  );
};

export default ProductCard;
