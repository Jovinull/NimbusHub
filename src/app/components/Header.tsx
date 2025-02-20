"use client"; // ✅ Isso garante que o componente é um Client Component

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./provides/ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="p-4 flex justify-between items-center shadow-md bg-[var(--header-footer-bg)] transition-all">
      <h1 className="text-lg font-bold">NimbusHub</h1>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link
              href="/"
              className={`hover:underline ${
                pathname === "/" ? "text-blue-600 dark:text-blue-400" : ""
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`hover:underline ${
                pathname === "/about" ? "text-blue-600 dark:text-blue-400" : ""
              }`}
            >
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
      >
        {theme === "dark" ? <FaSun size={20} className="text-yellow-500" /> : <FaMoon size={20} className="text-gray-900" />}
      </button>
    </header>
  );
}
