import { star } from "../assets/icons";
const ShoeContainer = ({ imgURL, name, price, variant }) => {
  return (
    <div className="border-2 rounded-xl border-transparent cursor-pointer max-sm:flex-1">
      <div
        className={`flex justify-center items-center ${
          variant ? "bg-white " : "bg-card"
        }  bg-center bg-cover sm:w-60 sm:h-60 rounded-xl max-sm:p-2`}
      >
        <img src={imgURL} width={282} height={282} className="object-contain" />
      </div>
      <div className="flex flex-row mt-2 gap-3">
        <img src={star} alt="star" width={23} height={23} />
        <p className="font-montserrat text-slate-gray text-lg pt-1  sm:max-w-sm">
          {" "}
          (4.5)
        </p>
      </div>
      <p className="text-xl font-bold mt-3">{name}</p>
      <p className="text-coral-red inline-block text-xl font-bold mt-3">
        {price}
      </p>
    </div>
  );
};

export default ShoeContainer;
