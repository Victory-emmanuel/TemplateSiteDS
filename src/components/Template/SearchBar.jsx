/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches");
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      addToRecentSearches(searchTerm);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const addToRecentSearches = (term) => {
    const updatedSearches = [
      term,
      ...recentSearches.filter((s) => s !== term),
    ].slice(0, 5);
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  // const handleRecentSearchClick = (term) => {
  //   setSearchTerm(term);
  //   onSearch(term);
  // };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6 relative"
    >
      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Search templates..."
          value={searchTerm}
          onChange={handleInputChange}
          className="flex-grow outline-none border-none  bg-primary/50 dark:bg-secondary/50 placeholder:text-secondary/20 dark:placeholder:text-primary/40"
          icon={<FiSearch />}
        />
        <Button type="submit" className="bg-accent text-black">
          Search
        </Button>
      </form>
      {/* <AnimatePresence>
        {recentSearches.length > 0 && searchTerm === "" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg"
          >
            <Typography
              variant="small"
              color="blue-gray"
              className="p-2 font-semibold"
            >
              Recent Searches
            </Typography>
            {recentSearches.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                onClick={() => handleRecentSearchClick(term)}
              >
                <FiClock className="mr-2" />
                <Typography variant="small" color="blue-gray">
                  {term}
                </Typography>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence> */}
    </motion.div>
  );
};

export default SearchBar;
