"use client";

import { useEffect, useState } from "react";
import { getIdentity, initAuthClient } from "../../utils/icpAuthClient"; // Adjust the path as needed
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function Dashboard() {
  const [identity, setIdentity] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchIdentity = async () => {
      const userIdentity = await getIdentity();
      setIdentity(userIdentity);
    };

    fetchIdentity();
  }, []);

  const handleLogout = async () => {
    const client = await initAuthClient();
    await client.logout(); // Call logout method on the AuthClient
    router.push("/"); // Redirect to the home page after logging out
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
        Welcome to ChainAuth Dashboard
      </h1>
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
        {identity ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Your Identity
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{identity}</p>
            <button
              onClick={handleLogout}
              className="mt-4 w-full px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md transition duration-200 ease-in-out"
            >
              Logout
            </button>
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400 text-center">
            Loading your identity...
          </p>
        )}
      </div>
    </div>
  );
}
