import React, { useState, useEffect } from "react";

const PriceFilter = ({ setFilteredData, data }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50);

  const handleMinPriceChange = (event) => {
    setMinPrice(parseInt(event.target.value));
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(parseInt(event.target.value));
  };

  const filteredProducts = data.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  setFilteredData(filteredProducts);

  return (
    <div className="w-11/12">
      <label className="block mb-2" htmlFor="minPrice">
        Min Price:
        <input
          type="range"
          id="minPrice"
          name="min"
          value={minPrice}
          min={0}
          max={150}
          onChange={handleMinPriceChange}
          className="block w-full mt-1"
        />
      </label>
      <label className="block mb-2" htmlFor="maxPrice">
        Max Price:
        <input
          type="range"
          id="maxPrice"
          name="max"
          value={maxPrice}
          min={0}
          max={150}
          onChange={handleMaxPriceChange}
          className="block w-full mt-1"
        />
      </label>
    </div>
  );
};

export default PriceFilter;
