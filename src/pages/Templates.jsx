import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@material-tailwind/react";
import { templates } from "../data/templates";
import FilterSidebar from "../components/Template/FilterSidebar";
import TemplateCard from "../components/Template/TemplatesCard";
import TemplateListItem from "../components/Template/TemplateListItems";
import TemplateOptions from "../components/Template/TemplateOptions";
import SearchBar from "../components/Template/SearchBar";

const Templates = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPages, setSelectedPages] = useState([]);
  const [sortOption, setSortOption] = useState("popular");
  const [viewMode, setViewMode] = useState("grid");
  const [filteredTemplates, setFilteredTemplates] = useState(templates);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleCategory = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const togglePage = (pageRange) => {
    setSelectedPages((prev) =>
      prev.includes(pageRange)
        ? prev.filter((range) => range !== pageRange)
        : [...prev, pageRange]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedPages([]);
  };

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const getPageRange = useCallback((pages) => {
    if (pages <= 1) return "1";
    if (pages <= 2) return "2";
    if (pages <= 3) return "3";
    if (pages <= 4) return "4";
    if (pages <= 5) return "5";
    return "5+";
  }, []);

  useEffect(() => {
    let result = templates;

    if (searchTerm) {
      result = result.filter((template) =>
        template.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter((template) =>
        selectedCategories.includes(template.category)
      );
    }

    if (selectedPages.length > 0) {
      result = result.filter((template) =>
        selectedPages.includes(getPageRange(template.pages))
      );
    }

    switch (sortOption) {
      case "popular":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        // Assuming we had a 'createdAt' field, we would sort by that here
        break;
      case "priceAsc":
        result.sort(
          (a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price)
        );
        break;
      case "priceDesc":
        result.sort(
          (a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price)
        );
        break;
      default:
        break;
    }

    setFilteredTemplates(result);
  }, [selectedCategories, selectedPages, sortOption, searchTerm, getPageRange]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white dark:bg-black"
    >
      <SearchBar onSearch={handleSearch} />

      <div className="flex flex-col lg:flex-row gap-8">
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:w-1/4"
            >
              <FilterSidebar
                selectedCategories={selectedCategories}
                toggleCategory={toggleCategory}
                selectedPages={selectedPages}
                togglePage={togglePage}
                clearAllFilters={clearAllFilters}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <main className="w-full lg:w-3/4 relative">
          <TemplateOptions
            sortOption={sortOption}
            setSortOption={setSortOption}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden w-full bg-accent text-black px-4 py-2 rounded"
            >
              {isFilterOpen ? "Hide Filters" : "Show Filters"}
            </Button>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={viewMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {filteredTemplates.map((template, index) => (
                    <motion.div
                      key={template.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <TemplateCard template={template} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredTemplates.map((template, index) => (
                    <motion.div
                      key={template.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <TemplateListItem template={template} />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </motion.div>
  );
};

export default Templates;
