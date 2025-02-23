/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

import { GoRocket } from "react-icons/go";
import { IoColorPaletteOutline, IoSettingsOutline } from "react-icons/io5";
import { TbSeo } from "react-icons/tb";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

const features = [
  {
    icon: GoRocket,
    title: " Lightning Fast Performance",
    description:
      "Our templates are optimized for speed, ensuring fast load times, better user experience, and improved SEO rankings. Say goodbye to slow websites that frustrate visitors.",
    highlighted: true,
  },
  {
    icon: IoColorPaletteOutline,
    title: "Pixel-Perfect, Modern Design",
    description:
      "Designed with precision, our templates feature sleek layouts, beautiful typography, and seamless responsiveness, making your website visually stunning on any device or screen size.",
  },
  {
    icon: IoSettingsOutline,
    title: " Easy Customization",
    description:
      "Easily modify colors, fonts, layouts, and content without coding knowledge. Our intuitive customization options empower you to create a unique website effortlessly.",
  },
  {
    icon: TbSeo,
    title: " SEO & Mobile Optimization",
    description:
      "Built with best SEO practices, our templates help you rank higher in search engines. Plus, they are fully responsive, ensuring a flawless experience on any device.",
  },
  {
    icon: MdOutlineSystemUpdateAlt,
    title: "One-Click Setup & Installation",
    description:
      "Get online in minutes with our simple installation process. No technical hassle—just upload, activate, and start customizing right away.",
  },
  {
    icon: RxUpdate,
    title: " Support & Updates",
    description:
      "Your success is our priority. Enjoy regular template updates and dedicated support to ensure your website remains modern, secure, and fully functional at all times.",
  },
];

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  highlighted,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`p-6 rounded-xl ${
        highlighted
          ? "bg-black dark:bg-white"
          : "bg-white dark:bg-black border border-primary dark:border-secondary"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
          highlighted
            ? "bg-primary/20 dark:bg-secondary"
            : "bg-primary dark:bg-primary/20"
        }`}
      >
        <Icon
          className={`w-6 h-6 ${
            highlighted ? " text-white" : "text-secondary dark:text-white "
          }`}
        />
      </div>
      <Typography
        variant="h5"
        className={
          highlighted
            ? "text-white/80 dark:text-secondary/80 font-semibold mb-4"
            : "text-secondary dark:text-primary font-semibold mb-4"
        }
      >
        {title}
      </Typography>
      <Typography
        className={
          highlighted
            ? "text-white/80 dark:text-secondary/80"
            : "text-secondary dark:text-primary"
        }
      >
        {description}
      </Typography>
    </motion.div>
  );
};

const FeatureSection = () => {
  return (
    <section className="py-16 px-6 ss:px-12">
      <div className=" mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Typography
            variant="h2"
            className="ss:text-4xl text-3xl font-bold mb-4"
          >
            Why Choose SquidTemplates?
          </Typography>
          <Typography className="text-secondary dark:text-white">
            Why Settle for Average? Get Designs That Convert.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default FeatureSection;
