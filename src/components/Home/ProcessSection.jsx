/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import {
  UserIcon,
  BuildingOffice2Icon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const processSteps = [
  {
    number: "01",
    title: "Select Your Design",
    description:
      "Browse our diverse collection of website templates and UI components designed for every industry. Find the perfect starting point that matches your vision and brand identity seamlessly.",
    icon: UserIcon,
    color: "bg-[#590F76]",
    darkColor: "dark:bg-[#F9EBFE]",
    textColor: "text-[#f1cdfd]",
    darkTextColor: "dark:text-[#590F76]",
  },
  {
    number: "02",
    title: "Customize With Ease",
    description:
      "Personalize every detail using our intuitive, no-code builder. Adjust colors, layouts, fonts, and elements to create a unique, tailor-made website that stands out in your market.",
    icon: BuildingOffice2Icon,
    color: "bg-[#2B033A]/70",
    darkColor: "dark:bg-[#f1cdfd]/80",
    textColor: "text-[#F9EBFE]",
    darkTextColor: "dark:text-[#590F76]",
  },
  {
    number: "03",
    title: "Intergrate Essential components",
    description:
      "Enhance your design by integrating pre-built elements like navigation bars, buttons, modals, and content blocks. Ensure your site is fully responsive, SEO-friendly, and optimized for all devices.",
    icon: BuildingOffice2Icon,
    color: "bg-[#2B033A]/70",
    darkColor: "dark:bg-[#f1cdfd]/80",
    textColor: "text-[#F9EBFE]",
    darkTextColor: "dark:text-[#590F76]",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "Deploy your website quickly and effortlessly. Once live, leverage built-in analytics and ongoing support to monitor performance, update content, and scale your online presence for continued success.",
    icon: MapPinIcon,
    color: "bg-[#2B033A]/70",
    darkColor: "dark:bg-[#f1cdfd]/80",
    textColor: "text-[#F9EBFE]",
    darkTextColor: "dark:text-[#590F76]",
  },
];

const ProcessCard = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Number */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`relative mb-6 ${step.color} ${step.darkColor}  rounded-lg p-8`}
      >
        <span
          className={`text-8xl font-bold   ${step.textColor} ${step.darkTextColor}`}
        >
          {step.number}
        </span>
      </motion.div>

      {/* Content */}
      <div className="max-w-sm">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-3 font-bold text-secondary dark:text-white"
        >
          {step.title}
        </Typography>
        <Typography className="mb-6 text-black/80 dark:text-primary/80">
          {step.description}
        </Typography>
        <div
          className={`inline-flex p-3 rounded-lg ${step.color} ${step.darkColor}`}
        >
          <step.icon
            className={`w-6 h-6 ${step.textColor}  ${step.darkTextColor}`}
          />
        </div>
      </div>

      {/* Connector Line (hide on last item and mobile) */}
      {index < processSteps.length - 1 && (
        <div className="hidden lg:block absolute top-1/4 left-[60%] w-[calc(100%-60%)] h-[2px] bg-gray-200 dark:bg-gray-700" />
      )}
    </motion.div>
  );
};

const ProcessSection = () => {
  return (
    <section className="py-16 px-6 ss:px-12 bg-primary dark:bg-secondary">
      <div className=" mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography
            variant="h2"
            className="mb-4  ss:text-4xl text-3xl font-bold text-secondary dark:text-white"
          >
            Our Process
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto max-w-2xl text-black dark:text-primary"
          >
            We follow a systematic approach to deliver high-quality solutions
            that meet your business needs and exceed expectations.
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {processSteps.map((step, index) => (
            <ProcessCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
