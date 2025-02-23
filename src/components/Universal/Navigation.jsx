// // src\components\Universal\Navigation.jsx

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  IconButton,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useAuth } from "../../contexts/AuthContext"; // NEW IMPORT
import { googleLogin, logout } from "../../firebase/auth"; // NEW IMPORT

const NavLinks = [
  { name: "Home", path: "/" },
  { name: "Components", path: "/components" },
  { name: "Templates", path: "/templates" },
  { name: "Pricing", path: "/pricing" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { user } = useAuth(); // GET USER AUTH STATE

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  const handleLogout = async () => {
    // NEW LOGOUT HANDLER
    try {
      await logout();
      setOpen(false); // Close mobile menu on logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const navVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  return (
    <Navbar
      className="sticky top-0 z-50 dark:bg-black dark:text-white bg-white text-secondary/80 rounded-none px-6 ss:px-12 py-4 border-none shadow-lg shadow-secondary/10 dark:shadow-primary/10"
      fullWidth
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div variants={navVariants} className="col-span-1">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-accent rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <Typography variant="h6" className="font-bold">
              SquidTemplates
            </Typography>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden ss:flex gap-8 items-center">
          {NavLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `dark:hover:text-accent hover:text-secondary hover:font-semibold transition-colors ${
                    isActive ? "text-black dark:text-accent font-bold" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Auth Section */} {/* NEW AUTH UI */}
          {user ? (
            <div className="flex items-center gap-2">
              <Avatar
                src={user.photoURL}
                alt={user.displayName || "User"}
                size="sm"
                className="border-2 border-accent"
              />
              <Button
                onClick={handleLogout}
                variant="text"
                className="dark:text-white text-secondary hover:bg-accent/10"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              onClick={googleLogin}
              variant="filled"
              className="bg-accent text-black hover:bg-accent/90"
            >
              Sign in
            </Button>
          )}
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full"
          >
            {darkMode ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </motion.button>
          <IconButton
            variant="text"
            className="ss:hidden text-inherit hover:bg-transparent focus:bg-transparent"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </IconButton>
        </div>
      </div>

      {/* Mobile Navigation */}
      <Collapse open={open}>
        <motion.div
          initial="closed"
          animate={open ? "open" : "closed"}
          variants={navVariants}
          className="flex flex-col ss:hidden gap-4 mt-4 border-t border-secondary/10 dark:border-gray-800"
        >
          {NavLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <NavLink
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 dark:hover:text-accent hover:text-secondary hover:font-semibold transition-colors ${
                    isActive ? "text-black dark:text-accent font-bold" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
          {/* Mobile Auth Section */} {/* NEW MOBILE AUTH UI */}
          {user ? (
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button
                onClick={handleLogout}
                className="w-full text-left py-2 dark:hover:text-accent hover:text-secondary hover:font-semibold"
              >
                Logout
              </button>
            </motion.div>
          ) : (
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button
                onClick={googleLogin}
                className="w-full text-left py-2 dark:hover:text-accent hover:text-secondary hover:font-semibold"
              >
                Sign in with Google
              </button>
            </motion.div>
          )}
        </motion.div>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
