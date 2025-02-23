/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

const PreviewButton = ({ previewUrl }) => {
  return (
    <Button
      size="sm"
      className="bg-secondary dark:bg-primary text-white dark:text-secondary flex-grow"
      onClick={() => window.open(previewUrl, "_blank")}
    >
      Preview
    </Button>
  );
};

export default PreviewButton;
