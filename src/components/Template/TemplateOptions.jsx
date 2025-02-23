/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Typography, Select, Option, Button } from "@material-tailwind/react";
import { TfiViewListAlt, TfiViewGrid } from "react-icons/tfi";

const TemplateOptions = ({
  sortOption,
  setSortOption,
  viewMode,
  setViewMode,
}) => {
  return (
    <div className=" ss:h-16 h-48 ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col ss:flex-row justify-between items-start sm:items-center mb-6 gap-4 absolute z-10"
      >
        <Typography variant="h4" color="blue-gray" className="mb-2 sm:mb-0">
          Templates
        </Typography>

        <div className="flex gap-4 flex-col sm:flex-row items-start sm:items-center">
          <Select
            value={sortOption}
            onChange={(value) => setSortOption(value)}
            label="Sort by"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
            className=""
          >
            <Option className="text-black" value="popular">
              Most Popular
            </Option>
            <Option className="text-black" value="newest">
              Newest
            </Option>
            <Option className="text-black" value="priceAsc">
              Price: High to Low
            </Option>
            <Option className="text-black" value="priceDesc">
              Price: Low to High
            </Option>
          </Select>
        </div>
        <div className="flex gap-2">
          <Button
            variant={viewMode === "grid" ? "filled" : "outlined"}
            className="p-2"
            onClick={() => setViewMode("grid")}
          >
            <TfiViewGrid className="h-5 w-5 text-white" />
          </Button>
          <Button
            variant={viewMode === "list" ? "filled" : "outlined"}
            className="p-2"
            onClick={() => setViewMode("list")}
          >
            <TfiViewListAlt className="h-5 w-5 text-secondary dark:text-primary" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default TemplateOptions;
