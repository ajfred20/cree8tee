"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="text-center max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-block mb-8">
            <Image
              src="/assets/logo.svg"
              alt="Hustle Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-4"
        >
          <Image
            src="/assets/errror.svg"
            alt="Avatar"
            width={80}
            height={80}
            className="mx-auto rounded-full"
          />
        </motion.div>

        <motion.h1
          className="text-4xl font-semibold tracking-tighter text-gray-800 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          404! 404! 404!
        </motion.h1>

        <motion.p
          className="text-sm text-gray-600 mb-8 font-light tracking-tighter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          This page not found due to some reasons.chief 🫠
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-block px-6 py-3 border-2 border-purple-600 text-purple-600 font-medium tracking-tight rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-300"
          >
            Go to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
