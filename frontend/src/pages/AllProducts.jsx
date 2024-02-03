import Sidebar from "../components/Sidebar";
import NavBarProducts from "../components/NavBarProducts";
import Filter from "../components/Filter";
import ShoeContainer from "../components/ShoeContainer";
import rawdata from "../assets/data.js";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AllProducts = () => {
  const [data, setData] = useState(rawdata);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <main className=" dark:bg-[#000814]  dark:text-white grid grid-cols-1 md:grid-cols-[auto_1fr] max-container w-full px-8  mt-1">
      <section className="w-6/12  mt-20">
        <Sidebar
          setFilteredData={setFilteredData}
          data={data}
          filteredData={filteredData}
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
          <motion.div
            layout
            initial={{ opacity: 0, x: 20 }} // Start items off-screen
            animate={{ opacity: 1, x: 0 }} // Animate to their final positions
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3 gap-8"
          >
            {filteredData.map((item) => (
              <ShoeContainer
                key={item._id}
                imgURL={item.img}
                name={item.title}
                price={`$${item.newPrice}`}
                variant="all product"
              />
            ))}
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default AllProducts;
