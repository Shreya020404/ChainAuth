"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"; // Light and dark icons
import { HiAdjustments } from "react-icons/hi"; // System icon

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // When mounted on the client, set mounted to true
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering on the server side

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Explicitly define the type for selectedTheme
  const handleThemeChange = (selectedTheme: "light" | "dark" | "system") => {
    setTheme(selectedTheme);
    setDropdownOpen(false);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div>
        <Link
          className="text-xl font-bold text-gray-900 dark:text-gray-100"
          href="/"
        >
          ChainAuth
        </Link>
      </div>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center p-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded transition-colors duration-300"
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
        >
          <span className="mr-2">
            {theme === "dark" ? <BsFillMoonFill /> : <BsFillSunFill />}
          </span>
          Theme
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
            <button
              onClick={() => handleThemeChange("light")}
              className="flex items-center w-full px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <BsFillSunFill className="mr-2" /> Light
            </button>
            <button
              onClick={() => handleThemeChange("dark")}
              className="flex items-center w-full px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <BsFillMoonFill className="mr-2" /> Dark
            </button>
            <button
              onClick={() => handleThemeChange("system")}
              className="flex items-center w-full px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <HiAdjustments className="mr-2" /> System
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
