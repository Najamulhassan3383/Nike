// ThemeSwitcher.jsx
import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import useDarkSide from "../Hooks/UseDarkTheme.js";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(theme === "dark");

  useEffect(() => {
    setDarkSide(theme === "dark");
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex justify-end" onClick={toggleDarkMode}>
      {darkSide ? <CiLight /> : <MdDarkMode />}
    </div>
  );
}
