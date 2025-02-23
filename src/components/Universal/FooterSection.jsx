import { motion } from "framer-motion";
import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const companyLinks = [
  { name: "Home", href: "/" },
  { name: "Components", href: "/components" },
  { name: "Templates", href: "/templates" },
  { name: "Pricing", href: "/pricing" },
];

export function FooterSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-primary/80 dark:bg-secondary ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" mx-auto px-6 ss:px-12 py-12"
      >
        <div className="grid grid-cols-1 ss:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 ss:col-span-2 col-span-1"
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-accent rounded flex items-center justify-center">
                <span className=" text-secondary/75 font-bold text-xl">S</span>
              </div>
              <Typography
                variant="h5"
                className="font-bold text-secondary dark:text-primary"
              >
                SquidTemplates
              </Typography>
            </Link>
          </motion.div>

          {/* Company Links */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 text-black dark:text-white"
          >
            <Typography variant="h6" className="mb-4 ">
              Useful Links
            </Typography>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.href}
                    className="dark:text-primary dark:hover:text-white hover:text-secondary transition-colors duration-200 hover:font-semibold"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 text-black dark:text-white "
          >
            <Typography variant="h6" className="mb-4">
              Contact Us
            </Typography>
            <a
              href="mailto: marketinglot.blog@gmail.com"
              className="dark:text-primary group  transition-colors flex gap-2 mb-4 duration-300 "
            >
              <FaEnvelope className="group-hover:text-secondary my-auto dark:group-hover:text-white" />
              <span className="group-hover:text-secondary dark:group-hover:text-white">
                marketinglot.blog@gmail.com
              </span>
            </a>
            <a
              href="call:info@example.com"
              className="dark:text-primary group transition-colors flex gap-2 mb-4 duration-300 "
            >
              <FaPhone className="group-hover:text-secondary  dark:group-hover:text-white my-auto" />
              <span className="group-hover:text-secondary dark:group-hover:text-white">
                +2348109125793
              </span>
            </a>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 ss:col-span-2 col-span-1"
          >
            <Typography className="mb-4 dark:text-primary">
              Discover our collection of premium website templates and
              components designed to elevate your digital presence.
            </Typography>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=" flex gap-2 flex-wrap"
            >
              <button className="bg-accent  hover:bg-accent/90 text-secondary py-3 px-6 rounded-md border-accent border font-semibold">
                Explore Templates
              </button>
              <button className="bg-accent hover:bg-accent/90 text-secondary py-3 px-6 rounded-md border-accent border font-semibold">
                Explore Components
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className=""
      >
        <div className=" mx-auto px-6 ss:px-12 py-4">
          <Typography className="text-center text-secondary/70 dark:text text-sm">
            © SquidTemplates Inc. {new Date().getFullYear()}
          </Typography>
        </div>
      </motion.div>
    </footer>
  );
}
