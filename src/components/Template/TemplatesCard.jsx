/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { FaStar } from "react-icons/fa";
import PreviewButton from "./PreviewButton";
import BuyNowButton from "./BuyNowButton";

const TemplateCard = ({ template }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Safe value accessors
  const priceNGN = template.priceNGN ?? 0;
  const discountPriceNGN = template.discountPriceNGN ?? 0;
  const rating = template.rating ?? 0;

  return (
    <>
      <Card className="overflow-hidden bg-primary/80 dark:bg-secondary">
        <CardHeader
          floated={false}
          className="h-48 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={template.image || "/placeholder.svg"}
            alt={template.name}
            className="w-full h-full object-cover shadow-lg shadow-primary"
          />
        </CardHeader>
        <CardBody className="flex-grow">
          <Typography
            variant="h5"
            className="mb-2 line-clamp-1 text-black dark:text-primary"
          >
            {template.name}
          </Typography>
          <Typography className="font-normal mb-2 line-clamp-1 text-black dark:text-primary">
            by {template.author}
          </Typography>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(rating) ? "text-yellow-300" : "text-white"
                }`}
              />
            ))}
            <span className="ml-2 text-secondary dark:text-primary">
              {rating.toFixed(1)}
            </span>
          </div>
          <div className="flex items-center">
            {discountPriceNGN > 0 ? (
              <>
                <Typography
                  variant="h6"
                  className="line-through mr-2 text-secondary dark:text-primary"
                >
                  ₦{priceNGN.toFixed(2)}
                </Typography>
                <Typography variant="h6" color="red">
                  ₦{discountPriceNGN.toFixed(2)}
                </Typography>
              </>
            ) : (
              <Typography
                variant="h6"
                className="text-secondary dark:text-primary"
              >
                ₦{priceNGN.toFixed(2)}
              </Typography>
            )}
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <div className="flex justify-between gap-2">
            <PreviewButton previewUrl={template.previewUrl} />
            <BuyNowButton template={template} />
          </div>
        </CardFooter>
      </Card>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={template.image || "/placeholder.svg"}
                alt={template.name}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TemplateCard;
