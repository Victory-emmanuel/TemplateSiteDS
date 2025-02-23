import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button, Typography } from "@material-tailwind/react";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Parallax effect for background
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, 50]);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y: isMobile ? 0 : backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b  from-primary/80 to-secondary/80 dark:from-black/80 dark:to-secondary/80" />
        <div className="h-full w-full bg-cover bg-center bg-no-repeat dark:bg-[url('https://i.postimg.cc/d1sskM1g/18707.jpg')] bg-[url('https://i.postimg.cc/RZZ2HMQ7/138123.jpg')]" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 ss:px-12">
        <motion.div
          ref={ref}
          style={{ y: isMobile ? 0 : textY }}
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl text-white  ss:text-4xl sm:text-5xl md:text-6xl font-playfair "
          >
            Transform Your Vision Into Reality
          </Typography>

          <Typography
            variant="lead"
            color="white"
            className="mb-8 opacity-80 max-w-lg mx-auto"
          >
            Discover our collection of premium website templates and components
            designed to elevate your digital presence.
          </Typography>

          <div className="flex flex-col ss:flex-row gap-4 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <button className="bg-accent hover:bg-accent/90 text-secondary py-3 px-6 rounded-md border-accent border font-semibold">
                Explore Templates
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button
                color="white"
                className="border-white text-white hover:bg-white/10 py-3 px-6 rounded-md bg-transparent border font-semibold"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/* Scrolling Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="animate-bounce w-6 h-10 border-4 border-white rounded-full">
            <div className="w-1 h-2 bg-white mx-auto mt-1 rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default HeroSection;
