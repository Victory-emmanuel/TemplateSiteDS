/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Typography, Button, Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const templates = [
  {
    id: 1,
    title: "Hair Stylist Template",
    image: "https://i.postimg.cc/VstYW1yR/1.jpg",
    description: "A sleek and modern e-commerce template for online stores.",
  },
  {
    id: 2,
    title: "Portfolio Template",
    image: "https://i.postimg.cc/25GTKJqL/Untitled-design-1.png",
    description: "Showcase your work with this elegant portfolio template.",
  },
  {
    id: 3,
    title: "Blog Template",
    image: "https://i.postimg.cc/Ss2m5bnm/3.jpg",
    description: "A clean and responsive blog template for content creators.",
  },
  {
    id: 4,
    title: "Medical and Health Template",
    image: "https://i.postimg.cc/qRd01N3v/Untitled-design-4.png",
    description: "Professional template for corporate and business websites.",
  },
  {
    id: 5,
    title: "Food & Pastry Template",
    image: "https://i.postimg.cc/jdjWH1Tk/Untitled-design-2.png",
    description: "Professional template for corporate and business websites.",
  },
  {
    id: 6,
    title: "Ecommerce Template",
    image: "https://i.postimg.cc/jj33jms0/Untitled-design.png",
    description: "Professional template for corporate and business websites.",
  },
];

const components = [
  {
    id: 1,
    title: "Navigation Bar",
    image: "https://i.postimg.cc/VstYW1yR/1.jpg",
    description: "Fully responsive navigation bar with dropdown menus.",
  },
  {
    id: 2,
    title: "Hero Section",
    image: "https://i.postimg.cc/VstYW1yR/1.jpg",
    description: "Eye-catching hero section with customizable background.",
  },
  {
    id: 3,
    title: "Pricing Table",
    image: "https://i.postimg.cc/VstYW1yR/1.jpg",
    description: "Clean and modern pricing table for showcasing plans.",
  },
  {
    id: 4,
    title: "Contact Form",
    image: "https://i.postimg.cc/VstYW1yR/1.jpg",
    description: "Stylish contact form with input validation.",
  },
];

const CarouselItem = ({ item }) => (
  <div className=" mx-auto relative h-full w-full shadow-lg shadow-black/10 dark:shadow-primary/10 ">
    <img
      src={item.image || "/placeholder.svg"}
      alt={item.title}
      className="h-full w-full object-cover "
    />
    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
      <div className="w-full text-center md:w-2/4">
        <Typography
          variant="h1"
          color="white"
          className="mb-4 ss:text-3xl text-xl md:text-4xl lg:text-5xl"
        >
          {item.title}
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mb-12 opacity-80 md:text-xl ss:text-lg text-base ss:block hidden"
        >
          {item.description}
        </Typography>
        <div className="flex justify-center gap-2 ">
          <Button className="bg-white text-black ss:py-4 px-6 py-3 font-semibold">
            Explore
          </Button>
          <Button className="text-white bg-transparent border py-4 px-6 border-white font-semibold ss:block hidden ">
            Gallery
          </Button>
        </div>
      </div>
    </div>
  </div>
);

const OurBestWorkSection = () => {
  const [activeTab, setActiveTab] = useState("templates");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 px-6 ss:px-12 bg-white  dark:bg-black">
      <div className=" md:max-w-[75%] max-w-[100%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Typography
            variant="h2"
            className="ss:text-4xl text-3xl font-bold mb-4 text-secondary dark:text-primary"
          >
            Our Best Works
          </Typography>
          <Typography className="text-xl text-black dark:text-white mb-8">
            Explore our top-notch templates and components
          </Typography>
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => setActiveTab("templates")}
              className={`px-8 py-3 ${
                activeTab === "templates"
                  ? "dark:bg-accent dark:text-black bg-black text-primary  border-black border  dark:border-accent "
                  : "bg-black text-primary  dark:bg-secondary dark:text-white border rounded-md dark:border-white border-black"
              }`}
            >
              Templates
            </Button>
            <Button
              onClick={() => setActiveTab("components")}
              className={`px-8 py-3 ${
                activeTab === "components"
                  ? "dark:bg-accent dark:text-black  bg-black text-primary  border-black border  dark:border-accent"
                  : "bg-black text-primary dark:bg-secondary dark:text-white border rounded-md dark:border-white border-black"
              }`}
            >
              Components
            </Button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === "templates" ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeTab === "templates" ? 20 : -20 }}
            transition={{ duration: 0.3 }}
          >
            <Carousel
              className="rounded-xl"
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 ">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white " : "w-4 bg-white/50"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              {(activeTab === "templates" ? templates : components).map(
                (item) => (
                  <CarouselItem key={item.id} item={item} />
                )
              )}
            </Carousel>
            <Link to={""}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <button className="bg-accent hover:bg-accent/90 text-secondary py-3 px-6 rounded-md border-accent border font-semibold">
                  Explore Templates
                </button>
              </motion.div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OurBestWorkSection;
