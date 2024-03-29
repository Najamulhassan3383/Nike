import headerLogo from "../assets/images/header-logo.svg";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={24} height={24} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
