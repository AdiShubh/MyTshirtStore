import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div key={product.id}>
      <div>
        <img
          src={product.image}
          width={250}
          height={200}
          className="rounded-md"
        />
      </div>
      <div className="ml-1">
        <div className="font-bold mt-2">{product.name}</div>
        <div className="text-gray-400">{product.category}</div>
        <div>{product.price}</div>
        <div className="flex flex-row gap-2">
          {product.availColors.map((color, index) => {
            return <div key={index}>{color}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
