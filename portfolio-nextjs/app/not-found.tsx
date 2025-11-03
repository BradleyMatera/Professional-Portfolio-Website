"use client";

import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="flex-grow bg-gradient-to-b from-[#0a192f] to-[#1c1c1c] flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#fb8b24]/10 border-2 border-[#fb8b24] mb-6">
              <FaExclamationTriangle className="text-[#fb8b24] text-5xl" />
            </div>
            <h1 className="text-6xl font-bold text-[#64ffda] mb-4">404</h1>
            <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Oops! The page you're looking for doesn't exist or has been moved. 
              Don't worry, even the best developers sometimes lose their way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              as={Link}
              href="/"
              size="lg"
              className="bg-[#fb8b24] hover:bg-[#e07a15] text-white font-bold shadow-lg hover:shadow-xl transition-all"
              startContent={<FaHome />}
            >
              Back to Home
            </Button>
            <Button
              as={Link}
              href="/projects"
              size="lg"
              variant="bordered"
              className="border-2 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] font-bold transition-all"
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-700"
          >
            <p className="text-gray-400">
              Need help? <Link href="/contact" className="text-[#64ffda] hover:text-[#fb8b24] transition-colors">Contact me</Link> and I'll help you find what you're looking for.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
