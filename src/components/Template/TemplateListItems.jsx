/* eslint-disable react/prop-types */

import {
  Card,
  CardBody,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import PreviewButton from "./PreviewButton";
import BuyNowButton from "./BuyNowButton";
import { FaStar } from "react-icons/fa";

const TemplateListItem = ({ template }) => {
  return (
    <Card className="overflow-hidden bg-primary dark:bg-secondary">
      <CardBody className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <img
          src={template.image || "/placeholder.svg"}
          alt={template.name}
          className="w-full sm:w-48 h-32 object-cover rounded"
        />
        <div className="flex-grow">
          <Typography
            variant="h5"
            className="mb-2 text-black dark:text-primary"
          >
            {template.name}
          </Typography>
          <Typography
            color="gray"
            className="font-normal mb-2 text-black dark:text-primary"
          >
            by {template.author}
          </Typography>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(template.rating)
                    ? "text-yellow-300"
                    : "text-white"
                }`}
              />
            ))}
            <span className="ml-2 text-secondary dark:text-white">
              {template.rating.toFixed(1)}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2 w-full sm:w-auto">
          <div className="text-right">
            {template.discountPrice ? (
              <>
                <Typography
                  variant="h6"
                  className="line-through  text-secondary dark:text-white mr-2"
                >
                  ${template.price.toFixed(2)}
                </Typography>
                <Typography variant="h6" color="red">
                  ${template.discountPrice.toFixed(2)}
                </Typography>
              </>
            ) : (
              <Typography variant="h6">${template.price.toFixed(2)}</Typography>
            )}
          </div>
          <CardFooter className="pt-0">
            <div className="flex justify-between gap-2">
              <PreviewButton previewUrl={template.previewUrl} />
              <BuyNowButton template={template} />
            </div>
          </CardFooter>
        </div>
      </CardBody>
    </Card>
  );
};

export default TemplateListItem;
