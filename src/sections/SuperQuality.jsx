import Button from "../components/Button";
import url from "../assets/images/shoe8.svg";

const SuperQuality = () => {
  return (
    <section id="about-us" className="grid grid-cols-1 md:grid-cols-2">
      <div className="pt-12">
        <h2 className="text-4xl font-bold font-palanquin mb-5">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="font-montserrat text-slate-gray text-xl mb-5 lg:text-2xl">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="font-montserrat text-slate-gray text-xl mb-5 lg:text-2xl">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button label="View Details" className="mb-5" />
      </div>
      <div>
        <img
          src={url}
          alt="shoe"
          width={570}
          height={522}
          className="object-center mt-5 md:mt-0"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
