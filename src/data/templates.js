// Original template data (USD prices)
export const templates = [
  {
    id: 1,
    name: "Modern E-commerce",
    category: "ecommerce",
    image: "https://i.postimg.cc/LsV561TV/3.png",
    author: "SquidDesign",
    price: 49.99,
    discountPrice: 39.99,
    rating: 4,
    previewUrl: "https://shop-whatever.vercel.app/",
    pages: 2,
  },
  // ... rest of your original templates data
];

// Converted templates (NGN prices)
const conversionRate = 1500;

const firestoreTemplates = templates.map((template) => {
  const originalPriceNGN = template.price * conversionRate;
  const priceNGN = template.discountPrice
    ? template.discountPrice * conversionRate
    : originalPriceNGN;

  return {
    name: template.name,
    category: template.category,
    image: template.image,
    author: template.author,
    priceNGN: priceNGN,
    originalPriceNGN: template.discountPrice ? originalPriceNGN : null,
    isFree: false,
    rating: template.rating,
    previewUrl: template.previewUrl,
    pages: template.pages,
    createdAt: new Date().toISOString(),
  };
});

export default firestoreTemplates; // For Firestore migration
