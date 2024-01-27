import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NavBarProducts from "../components/NavBarProducts";
import Filter from "../components/Filter";
import ShoeContainer from "../components/ShoeContainer";
import data from "../assets/data.js";

const AllProducts = () => {
  const [priceFilter, setPriceFilter] = useState("all");
  const [colorFilter, setColorFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(1000);

  useEffect(() => {
    if (priceFilter === "all") return;
    let parts = priceFilter.split(" - ");
    setNum1(parseInt(parts[0].replace(/\D/g, "")));
    setNum2(parseInt(parts[1].replace(/\D/g, "")));
  }, [priceFilter]);

  const filteredData = data.filter((item) => {
    if (
      priceFilter === "all" &&
      colorFilter.toLowerCase() === "all" &&
      categoryFilter.toLowerCase() === "all"
    ) {
      return true;
    } else if (
      priceFilter === "all" &&
      colorFilter.toLowerCase() === "all" &&
      categoryFilter.toLowerCase() === item.category
    ) {
      return true;
    } else if (
      colorFilter.toLowerCase() === "all" &&
      categoryFilter.toLowerCase() === "all" &&
      num1 <= Number(item.newPrice) &&
      Number(item.newPrice) <= num2
    ) {
      return true;
    } else if (
      priceFilter === "all" &&
      colorFilter.toLowerCase() === item.color.toLowerCase() &&
      categoryFilter.toLowerCase() === "all"
    ) {
      return true;
    } else if (
      priceFilter === "all" &&
      colorFilter.toLowerCase() === item.color.toLowerCase() &&
      categoryFilter.toLowerCase() === item.category
    ) {
      return true;
    } else if (
      num1 <= Number(item.newPrice) &&
      Number(item.newPrice) <= num2 &&
      colorFilter.toLowerCase() === item.color.toLowerCase() &&
      categoryFilter.toLowerCase() === "all"
    ) {
      return true;
    } else if (
      colorFilter.toLowerCase() === "all" &&
      categoryFilter.toLowerCase() === item.category &&
      num1 <= Number(item.newPrice) &&
      Number(item.newPrice) <= num2
    ) {
      return true;
    } else if (
      num1 <= Number(item.newPrice) &&
      Number(item.newPrice) <= num2 &&
      colorFilter.toLowerCase() === item.color.toLowerCase() &&
      categoryFilter.toLowerCase() === item.category
    ) {
      return true;
    }
    return false;
  });

  // Rest of the code...

  return (
    <main className="grid grid-cols-1 md:grid-cols-[auto_1fr] max-container w-11/12 m-auto mt-4">
      <section className="w-6/12 mt-10">
        <Sidebar
          setPriceFilter={setPriceFilter}
          setColorFilter={setColorFilter}
          setCategoryFilter={setCategoryFilter}
        />
      </section>
      <div>
        <div>
          <NavBarProducts />
        </div>
        <section>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-palanquin font-bold">Recommended</p>
            <Filter />
          </div>
          <div className="flex flex-row flex-wrap gap-8">
            {filteredData.map((item, index) => (
              <div key={index} className=" shadow-lg p-2 ">
                <ShoeContainer
                  imgURL={item.img}
                  name={item.title}
                  price={`$${item.newPrice}`}
                  variant="all product"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AllProducts;
