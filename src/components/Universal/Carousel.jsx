/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { IconButton } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-xl">
        <motion.div
          className="flex"
          animate={{ x: `${-currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {item}
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={prevSlide}
          className="rounded-full bg-white/30 text-white hover:bg-white/50 active:bg-white/50"
        >
          <ChevronLeftIcon strokeWidth={3} className="h-6 w-6" />
        </IconButton>
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={nextSlide}
          className="rounded-full bg-white/30 text-white hover:bg-white/50 active:bg-white/50"
        >
          <ChevronRightIcon strokeWidth={3} className="h-6 w-6" />
        </IconButton>
      </div>
    </div>
  );
};
export default Carousel;
