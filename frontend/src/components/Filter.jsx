import { filters } from "../constants";

const Filter = ({ setCompanyName }) => {
  return (
    <ul className="flex flex-row gap-4 justify-start items-center mb-4">
      {filters.map((item) => (
        <li
          onClick={() => setCompanyName(item.label)}
          key={item.label}
          className="p-2 border border-coral-red rounded-md hover:scale-110 transition-all ease-in-out duration-200"
        >
          <button className="">{item.label}</button>
        </li>
      ))}
    </ul>
  );
};

export default Filter;
