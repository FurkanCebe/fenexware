import React from "react";
import Link from "next/link"; // Next.js Link bileşeni

export default function Footer() {
  return (
    <footer className="bg-lightBg4 dark:bg-fasho3 text-dark dark:text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-sm">
          Copyright © 2025 Palgo Ai. All rights reserved.
        </p>
        <div className="mt-4">
          <Link 
            href="/terms-and-conditions" // Next.js'te 'to' yerine 'href' kullanılır
            className="text-sm text-blue-500 hover:text-blue-700"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
