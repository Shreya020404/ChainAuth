"use client";


import { FaGithub, FaTwitter } from "react-icons/fa"; // Icons for social links

export default function Footer() {
  

  return (
    <footer
      className={`bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-8 transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <p className="mb-4">
            A decentralized, passwordless authentication solution using ICP
            Internet Identity & Solana.
          </p>
          <div className="flex space-x-6 mb-4">
            <a
              href="https://github.com/Shreya020404/ChainAuth"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-200"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/SatyamChoubey77"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-200"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ChainAuth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
