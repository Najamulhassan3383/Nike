import { products } from "../constants";
import ShoeContainer from "../components/ShoeContainer";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  return (
    <section id="products" className="flex flex-col gap-10 relative ">
      <div className="flex flex-row justify-between items-center">
        <p className="text-4xl font-bold font-palanquin">
          Our <span className="text-coral-red">Popular</span> Products
        </p>
        <Link
          to="/allproducts"
          className="text-coral-red font-montserrat  hover:border-b-2 hover:border-coral-red transition-all duration-100 ease-in-out"
        >
          View All
        </Link>
      </div>
      <p className="font-montserrat text-slate-gray text-lg hidden md:inline-block">
        Experience top-notch quality and style with our sought-after <br />
        selections. Discover a world of comfort,design, and value.
      </p>

      <div className="flex flex-row gap-4 flex-wrap">
        {products.map((item) => (
          <div key={item.name}>
            <ShoeContainer {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
