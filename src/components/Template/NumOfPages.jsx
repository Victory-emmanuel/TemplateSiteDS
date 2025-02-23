/* eslint-disable react/prop-types */
import { Typography, Checkbox } from "@material-tailwind/react";
import { motion } from "framer-motion";

const NumOfPages = ({ selectedPages, togglePage }) => {
  const pageRanges = [
    { id: "1", label: "1 page" },
    { id: "2", label: "2 pages" },
    { id: "3", label: "3 pages" },
    { id: "4", label: "4 pages" },
    { id: "5", label: "5 pages" },
    { id: "5+", label: "5+ pages" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <Typography variant="h6" color="blue-gray" className="mb-2">
        Number of Pages
      </Typography>
      {pageRanges.map((range) => (
        <div key={range.id} className="mb-2">
          <Checkbox
            label={
              <Typography
                color="blue-gray"
                className="flex items-center font-normal ml-2 "
              >
                <div className="text-black dark:text-white"> {range.label}</div>
              </Typography>
            }
            checked={selectedPages.includes(range.id)}
            onChange={() => togglePage(range.id)}
            className="hover:before:opacity-0"
            containerProps={{
              className: "p-0",
            }}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default NumOfPages;
