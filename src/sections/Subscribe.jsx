import Button from "../components/Button";
const Subscribe = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-10 justify-between max-container">
      <h2 className="text-4xl font-palanquin font-bold ">
        Sign Up for <span className="text-coral-red">Updates</span>
        <br /> & Newsletter
      </h2>
      <div className="flex flex-row justify-between px-2 items-center border w-96 h-20 border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="Your Email Address"
          className="focus:outline-none pl-4"
        />
        <Button label={"Sign Up"} />
      </div>
    </section>
  );
};

export default Subscribe;
