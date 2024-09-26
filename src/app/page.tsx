import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to ChainAuth",
  description:
    "Decentralized, passwordless authentication solution using ICP Internet Identity & Solana.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Welcome to ChainAuth
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          A decentralized, passwordless authentication solution using ICP
          Internet Identity & Solana.
        </p>
        <div className="space-x-4">
          <a
            href="/login"
            className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-300"
          >
            Log In
          </a>
          <a
            href="/signup"
            className="px-6 py-3 text-white bg-gray-800 hover:bg-gray-900 rounded-md transition duration-300"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
