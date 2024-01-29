import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
const SpecialOffer = () => {
  return (
    <div className="flex flex-col-reverse justify-between items-center lg:flex-row gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="Special Offer"
          height={687}
          width={773}
          className="w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold font-palanquin">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
          <br /> Navigate a realm of possibilities designed to fulfill your
          unique desires, surpassing the loftiest expectations. Your journey
          with us is nothing short of exceptional.
        </p>
        <div className="mt-7 flex flex-row w-full justify-start items-center gap-6">
          <Button label={"Shop Now"} iconURL={arrowRight} />
          <Button label={"Learn More"} variant="outline" />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
