const Button = ({ label, iconURL, variant }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none ${
        !variant
          ? "bg-coral-red text-white"
          : "bg-transparent text-slate-gray border border-coral-red"
      } rounded-full border-coral-red hover:scale-110 transition-all ease-in-out hover:opacity-90`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
