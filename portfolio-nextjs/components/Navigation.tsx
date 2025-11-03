"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FaHome, FaCode, FaProjectDiagram, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
  { name: "Skills & Experience", path: "/skills-experience", icon: <FaCode /> },
  { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="bg-gradient-to-r from-[#1c1c1c] to-[#0a0a0a] shadow-lg"
      classNames={{
        wrapper: "px-4 sm:px-6",
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-[#fb8b24]"
        />
        <NavbarBrand>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="font-bold text-xl sm:text-2xl text-[#fb8b24] hover:text-[#64ffda] transition-colors"
            >
              Bradley Matera
            </Link>
          </motion.div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item, index) => (
          <NavbarItem key={item.name}>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                href={item.path}
                className="flex items-center gap-2 text-white hover:text-[#fb8b24] transition-colors font-medium"
              >
                <span className="text-[#fb8b24]">{item.icon}</span>
                {item.name}
              </Link>
            </motion.div>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-[#fb8b24] hover:text-[#64ffda]"
          >
            {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-[#1c1c1c]/95 backdrop-blur-lg pt-6">
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                className="w-full flex items-center gap-3 text-white hover:text-[#fb8b24] hover:bg-[#fb8b24]/10 rounded-lg px-4 py-3 transition-all"
                href={item.path}
                size="lg"
                onPress={() => setIsMenuOpen(false)}
              >
                <span className="text-[#fb8b24]">{item.icon}</span>
                {item.name}
              </Link>
            </motion.div>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
