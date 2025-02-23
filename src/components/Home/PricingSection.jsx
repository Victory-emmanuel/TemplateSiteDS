/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";

const pricingPlans = [
  {
    title: "DIY Package",
    subtitle: "Ideal for DIY enthusiasts who want to personalize their website",
    features: [
      "Template Customization: Easily modify colors, images, logos, and fonts with simple code tweaks.",
      "User-Friendly Guides: Access step-by-step documentation and video tutorials to guide you through each change.",
      "Constant Support: Join our support groups and discord channels for quick tips and advice from fellow users and the team .",
      "Free Updates: Receive regular template updates to keep your site secure and modern.",
    ],
    perks: [
      "Advanced Add-On Options: Upgrade with additional modules for enhanced functionality when you're ready for more.",
    ],
    price: "$50",
    popular: false,
  },
  {
    title: "Professional Package",
    subtitle:
      "Perfect for those who prefer expert assistance for a polished finish",
    features: [
      "Expert Code Implementation: Our professional code writer customizes your template.",
      "Personal Consultation: Enjoy a dedicated consultation to understand your vision.",
      "Priority Support: Benefit from expedited responses and dedicated assistance.",
      "Performance Optimization: We fine-tune your site for faster load times and SEO.",
    ],
    perks: [
      "Extended Revisions: Multiple rounds of revisions to perfect your site.",
      "Exclusive UI Bundle Discounts: Access to premium UI component bundles at special rates.",
    ],
    price: "$80",
    popular: true,
  },
  {
    title: " Custom Design Package",
    subtitle:
      "For a fully unique website built from scratch with a personal touch",
    features: [
      "Custom Design From Scratch: Our creative team builds a completely original website.",
      "Direct, Hands-On Consultation: Work one-on-one with our design experts.",
      "Full-Service Development: From initial design to final deployment.",
      "Unlimited Revisions: We work closely with you until every detail is perfect.",
      "Advanced Integrations & SEO: Professional SEO setup and custom integrations.",
    ],
    perks: [
      "Dedicated Project Manager: A single point of contact guides you through every stage.",
      "Extended Support & Training: Comprehensive post-launch training and ongoing support.",
    ],
    price: "Contact Us",
    popular: false,
  },
];

const FeatureItem = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-start gap-4 mb-2"
  >
    <CheckIcon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
    <Typography className="font-normal text-gray-700 dark:text-gray-300">
      {text}
    </Typography>
  </motion.div>
);

const PricingSection = () => {
  return (
    <section className="py-16 px-6 ss:px-12 bg-primary dark:bg-secondary">
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
            className="text-4xl font-bold mb-4 text-secondary dark:text-primary"
          >
            Pricing Plans
          </Typography>
          <Typography className="text-xl text-black dark:text-white/90">
            Choose the perfect package for your website, whether you're a DIY
            enthusiast or seeking a fully bespoke solution. Each package is
            designed to deliver exceptional value with extra perks that elevate
            your online presence.
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`relative h-full ${
                  plan.popular
                    ? "border-2 border-accent"
                    : "border border-gray-200 dark:border-gray-800"
                } dark:bg-black`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-accent text-black px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader
                  floated={false}
                  className={`text-center py-8 px-4 ${
                    plan.popular
                      ? "bg-accent/10"
                      : "bg-gray-100 dark:bg-gray-900"
                  }`}
                >
                  <Typography
                    variant="h3"
                    className=" font-bold mb-2 text-secondary dark:text-primary"
                  >
                    {plan.title}
                  </Typography>
                  <Typography className="text-black dark:text-white/90 mb-4">
                    {plan.subtitle}
                  </Typography>
                  <Typography
                    variant="h2"
                    className="text-black dark:text-white/90 font-bold "
                  >
                    {plan.price}
                  </Typography>
                </CardHeader>
                <CardBody className="p-6">
                  <Typography
                    variant="h6"
                    className="text-black dark:text-white/90 mb-4 "
                  >
                    What's Included:
                  </Typography>
                  {plan.features.map((feature, i) => (
                    <FeatureItem key={i} text={feature} />
                  ))}
                  <Typography
                    variant="h6"
                    className="text-black dark:text-white/60 mt-6 mb-4 "
                  >
                    Extra Perks:
                  </Typography>
                  {plan.perks.map((perk, i) => (
                    <FeatureItem key={i} text={perk} />
                  ))}
                  <Button
                    fullWidth
                    className={`mt-8 ${
                      plan.popular
                        ? "bg-accent text-black"
                        : "bg-secondary dark:bg-white dark:text-black"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
