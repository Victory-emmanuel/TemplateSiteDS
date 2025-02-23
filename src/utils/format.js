// src/utils/format.js
export const formatNGN = (amount) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount / 100); // Convert kobo to Naira
};
