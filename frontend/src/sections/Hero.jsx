import { useState } from "react";

import { shoes, statistics } from "../constants";
import Button from "../components/Button";
import ShoeCard from "../components/SheoCard";
import { Link } from "react-router-dom";

import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className=" relative w-full flex flex-col   justify-center min-h-screen gap-10 max-container"
    >
      <div className=" xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Shoes for every occasion
        </p>

        <h1 className="  mt-10 font-palanquin text-4xl max-sm:text-[55px] max-sm:leading-[60px] font-bold">
          <span className=" relative z-10 pr-10">
            Fresh styles, ready to step out
          </span>
          <br />
          <span className="text-coral-red inline-block mt-1">Nike</span> Shoes
          <img
            src="./hero-img.png"
            className="top-8 -right-8 hidden absolute lg:block"
            width={800}
            height={800}
          />
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-4 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Link to="/allproducts">
          <Button label="Shop now" iconURL={arrowRight} />
        </Link>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40  bg-hero bg-cover bg-center dark:bg-[#2b2d42]">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10 "
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
