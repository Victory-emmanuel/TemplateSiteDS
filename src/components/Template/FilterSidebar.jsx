/* eslint-disable react/prop-types */

import { Typography, Checkbox } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { categories } from "../../data/categories";
import NumOfPages from "./NumOfPages";

const FilterSidebar = ({
  selectedCategories,
  toggleCategory,
  selectedPages,
  togglePage,
  clearAllFilters,
}) => {
  return (
    <motion.aside
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "auto", opacity: 1 }}
      exit={{ width: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="lg:w-1/4 bg-primary dark:bg-secondary p-6 rounded-lg shadow-md"
    >
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h5">Filters</Typography>
        <button
          onClick={clearAllFilters}
          className="text-sm px-2 py-1 bg-accent text-black rounded-md hover:underline my-auto"
        >
          Clear All
        </button>
      </div>

      <div className="mb-6">
        <Typography variant="h6" className="mb-2">
          Categories
        </Typography>
        {categories.map((category) => (
          <div key={category.id} className="mb-2">
            <Checkbox
              label={
                <Typography className="flex items-center font-normal">
                  <div className=" ml-2 text-black dark:text-white">
                    {category.icon} {category.name}
                  </div>
                </Typography>
              }
              checked={selectedCategories.includes(category.id)}
              onChange={() => toggleCategory(category.id)}
              className="hover:before:opacity-0 "
              containerProps={{
                className: "p-0",
              }}
            />
          </div>
        ))}
      </div>

      <NumOfPages selectedPages={selectedPages} togglePage={togglePage} />
    </motion.aside>
  );
};

export default FilterSidebar;
