/* eslint-disable react/prop-types */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import WaveDivider from "../Universal/WaveDivider";

const TABS = [
  {
    label: "About us",
    value: "about",
    questions: [
      {
        q: "What is SquidTemplates?",
        a: "SquidTemplates is a premium platform offering hand-crafted website templates and UI components, designed to empower creators and businesses to build stunning, high-performance websites with ease.",
      },
      {
        q: "Who is behind SquidTemplates?",
        a: "Our team is composed of passionate designers, developers, and digital experts committed to delivering innovative, user-friendly designs that simplify website creation for professionals worldwide.",
      },
      {
        q: "What is the mission of SquidTemplates?",
        a: "Our mission is to democratize web design by providing accessible, high-quality templates and components that enable anyone to achieve a professional online presence without extensive technical skills.",
      },
    ],
  },
  {
    label: "Our service",
    value: "service",
    questions: [
      {
        q: "What types of templates do you offer?",
        a: "We offer a diverse range of full-page website templates tailored for various industries, including eCommerce, portfolios, corporate sites, creative agencies, healthcare, and more, ensuring the perfect design for every need.",
      },
      {
        q: "Can I customize your templates?",
        a: "Absolutely. Our templates are built for effortless, simple and basic code customization, allowing you to easily modify colors, fonts, layouts, and content to create a unique website that truly reflects your brand.",
      },
      {
        q: "Are your templates optimized for performance and SEO?",
        a: "Yes, all our templates are fully responsive and built with the latest SEO best practices, ensuring fast load times, mobile-friendly designs, and improved search engine rankings for your website.",
      },
      {
        q: "How long would take design your Website",
        a: "Usually a month. However quick delivary requires extra pay",
      },
    ],
  },
  {
    label: "Pricing",
    value: "pricing",
    questions: [
      {
        q: "What pricing options does SquidTemplates offer?",
        a: "We provide flexible pricing models, including one-time purchases and subscription plans, so you can choose the option that best suits your budget and long-term website needs.",
      },
      {
        q: "Do you offer any discounts or bundled deals?",
        a: "Yes, we frequently feature special promotions, seasonal discounts, and bundled deals for purchasing multiple templates or components. Check our offers page or subscribe to our newsletter for exclusive updates.",
      },
      {
        q: "What is your refund policy?",
        a: "We offer a straightforward refund policy within a specified period after purchase. If you encounter any issues or are unsatisfied with your purchase and we find fault from our end , our support team is ready to assist with your refund request if the issue can't be resolved.",
      },
    ],
  },
];

function Icon({ open }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      animate={{ rotate: open ? 180 : 0 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </motion.svg>
  );
}

const FaqSection = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? -1 : value);

  return (
    <section className="relative py-24 px-6 ss:px-12 bg-white dark:bg-black">
      <WaveDivider position="top" />
      <div className="container mx-auto max-w-4xl">
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
            Frequently Asked Questions
          </Typography>
          <Typography className="ss:text-xl text-lg text-black dark:text-white">
            Trusted by our loyal customers
          </Typography>
        </motion.div>

        <Tabs value={activeTab} className="mx-auto">
          <TabsHeader
            className="bg-transparent p-0 "
            indicatorProps={{
              className: "bg-accent shadow-none !text-gray-900",
            }}
          >
            {TABS.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={`${
                  activeTab === value
                    ? "text-black "
                    : "text-secondary dark:text-primary"
                } font-medium`}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 20, opacity: 0 },
              mount: { y: 0, opacity: 1 },
              unmount: { y: 20, opacity: 0 },
            }}
          >
            {TABS.map(({ value, questions }) => (
              <TabPanel key={value} value={value} className="p-0">
                <div className="mt-8">
                  {questions.map((item, index) => (
                    <Accordion
                      key={index}
                      open={open === index}
                      icon={<Icon open={open === index} />}
                      className="mb-2 rounded-lg border border-primary dark:border-secondary/50 px-4"
                    >
                      <AccordionHeader
                        onClick={() => handleOpen(index)}
                        className={`border-b-0 ss:text-xl text-lg transition-colors text-secondary dark:text-white ${
                          open === index
                            ? "text-secondary dark:text-accent"
                            : ""
                        }`}
                      >
                        {item.q}
                      </AccordionHeader>
                      <AccordionBody className="text-black dark:text-white pt-0">
                        {item.a}
                      </AccordionBody>
                    </Accordion>
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
      <WaveDivider position="bottom" />
    </section>
  );
};

export default FaqSection;
