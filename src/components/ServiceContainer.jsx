const ServiceContainer = ({ service }) => {
  //     {
  //     imgURL: truckFast,
  //     label: "Free shipping",
  //     subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  //   },
  return (
    <div className="">
      <div className="bg-coral-red w-11 h-11 flex justify-center items-center rounded-full">
        <img
          src={service.imgURL}
          width={24}
          height={24}
          alt={service.label}
          className=""
        />
      </div>

      <h2 className="font-palanquin text-3xl leading-normal font-bold mt-5">
        {service.label}
      </h2>
      <p className="mt-3 text-lg font-montserrat text-slate-gray leading-normal">
        {service.subtext}
      </p>
    </div>
  );
};

export default ServiceContainer;
