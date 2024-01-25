import { products } from "../constants";
import ShoeContainer from "../components/ShoeContainer";

const PopularProducts = () => {
  return (
    <section className="flex flex-col gap-10">
      <p className="text-4xl font-bold font-palanquin">
        Our <span className="text-coral-red">Popular</span> Products
      </p>
      <p className="font-montserrat text-slate-gray text-lg hidden md:inline-block">
        Experience top-notch quality and style with our sought-after <br />
        selections. Discover a world of comfort,design, and value.
      </p>
      <div className="flex flex-row gap-8 flex-wrap">
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
