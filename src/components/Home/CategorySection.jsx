/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Typography, Button } from "@material-tailwind/react";
import WaveDivider from "../Universal/WaveDivider";
import { Link } from "react-router-dom";

const categories = {
  templates: [
    {
      icon: "🏪",
      title: "Ecommerce Stores",
      description:
        "Sell products effortlessly with sleek, conversion-focused designs.",
    },
    {
      icon: "🏆",
      title: "Personal Portfolios",
      description:
        "Showcase your work beautifully with modern, minimalist layouts.",
    },
    {
      icon: "🏢",
      title: "Business & Corporate",
      description:
        "Professional, polished templates for agencies, startups, and enterprises.",
    },
    {
      icon: "🎨",
      title: "Creative & Agencies",
      description:
        "Bold, artistic designs perfect for photographers, designers, and studios.",
    },
    {
      icon: "🏥",
      title: "Medical & Health",
      description:
        "Clean, trust-building layouts for clinics, doctors, and healthcare professionals.",
    },
    {
      icon: "🍽️",
      title: "Food & Restaurants",
      description:
        "Engaging, mouth-watering templates for cafes, restaurants, and food bloggers.",
    },
  ],
  components: [
    {
      icon: "🔳",
      title: "Navigation Components",
      description: "Fully responsive navbars, sidebars, and mega menus.",
    },
    {
      icon: "🎭",
      title: "Hero Sections",
      description: "Attention-grabbing headers for a strong first impression.",
    },
    {
      icon: "🏗️",
      title: "Layout Sections",
      description: "Prebuilt grids, footers, and call-to-action sections.",
    },
    {
      icon: "🎛️",
      title: "Buttons & Forms",
      description: "Stylish, interactive buttons, forms, and input fields.",
    },
    {
      icon: "📝",
      title: "Content Blocks",
      description: "Ready-to-use cards, testimonials, and pricing tables.",
    },
    {
      icon: "📢",
      title: "Modals & Popups",
      description:
        "Smooth, elegant modals for alerts, signups, and promotions.",
    },
  ],
};

const CategoryCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-xl bg-primary dark:bg-secondary border border-primary/70 dark:border-secondary/70 hover:shadow-lg shadow-black/40 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <span className="text-4xl">{icon}</span>
        <div>
          <Typography variant="h6" className="mb-2 ">
            {title}
          </Typography>
          <Typography className="text-black dark:text-white">
            {description}
          </Typography>
        </div>
      </div>
    </motion.div>
  );
};

const CategorySection = () => {
  return (
    <section className="relative bg-white dark:bg-black py-24">
      <WaveDivider position="top" />

      <div className=" mx-auto px-6 ss:px-12">
        <div className="space-y-24">
          {/* Templates Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <Typography
                variant="h2"
                className="ss:text-4xl text-2xl font-bold mb-4 text-secondary dark:text-primary "
              >
                Website Templates
              </Typography>
              <Typography className="text-xl text-black dark:text-white ">
                Full-page designs built for every industry and need.
              </Typography>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.templates.map((item, index) => (
                <CategoryCard key={item.title} {...item} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Components Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <Typography
                variant="h2"
                className="ss:text-4xl text-2xl font-bold mb-4 text-secondary dark:text-primary"
              >
                <span className="text-accent">🛠️</span> UI Components
              </Typography>
              <Typography className="text-xl text-black dark:text-white">
                Pre-designed elements to enhance and speed up development.
              </Typography>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.components.map((item, index) => (
                <CategoryCard key={item.title} {...item} index={index} />
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex flex-col ss:flex-row gap-4 justify-center">
              <Link to={"/templates"}>
                <Button
                  size="lg"
                  className="bg-black dark:bg-accent text-white dark:text-secondary hover:scale-105 duration-200"
                >
                  Explore Templates
                </Button>
              </Link>

              <Link to={"/components"}>
                <Button
                  size="lg"
                  variant="outlined"
                  className="border-secondary dark:accent text-secondary dark:text-accent hover:bg-accent/10"
                >
                  Browse Components
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <WaveDivider position="bottom" />
    </section>
  );
};

export default CategorySection;
