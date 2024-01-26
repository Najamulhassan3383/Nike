import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NavBarProducts from "../components/NavBarProducts";
import Filter from "../components/Filter";
import ShoeContainer from "../components/ShoeContainer";
import data from "../assets/data.js";
const AllProducts = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-[auto_1fr] max-container w-11/12 m-auto mt-4">
      <section className="w-6/12 mt-10">
        <Sidebar />
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
            {data.map((item, index) => (
              <div key={index} className=" shadow-lg p-2 ">
                <ShoeContainer
                  imgURL={item.img}
                  name={item.title}
                  price={item.newPrice}
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
