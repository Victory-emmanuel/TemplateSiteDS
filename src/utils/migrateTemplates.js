// import { app } from "../firebase/config";
// import { getFirestore, doc, setDoc } from "firebase/firestore";
// import { templates } from "../data/templates";

// const db = getFirestore(app);

// const convertToNGN = (usdPrice) => {
//   // Use actual exchange rate or your fixed rate
//   const exchangeRate = 1500; // 1 USD = ₦1500
//   return Math.round(usdPrice * exchangeRate);
// };

// const migrateTemplates = async () => {
//   try {
//     for (const template of templates) {
//       const docRef = doc(db, "templates", `template-${template.id}`);
//       await setDoc(docRef, {
//         ...template,
//         priceNGN: convertToNGN(template.price),
//         discountPriceNGN: template.discountPrice
//           ? convertToNGN(template.discountPrice)
//           : null,
//         isFree: false,
//         createdAt: new Date(), // Firestore will auto-convert to Timestamp
//         salesCount: 0,
//         tags: [template.category],
//       });
//       console.log(`Migrated template ${template.id}`);
//     }
//     console.log("Migration complete!");
//   } catch (error) {
//     console.error("Migration failed:", error);
//   }
// };

// // migrateTemplates();
// export default migrateTemplates;

// // src/utils/migrateTemplates.js

import { app } from "../firebase/config.js";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { templates } from "../data/templates.js"; // Your old static data

const db = getFirestore(app);

const convertToNGN = (usdPrice) => {
  const exchangeRate = 1500; // 1 USD = ₦1500
  return Math.round(usdPrice * exchangeRate);
};

const migrateTemplates = async () => {
  try {
    for (const template of templates) {
      const docRef = doc(db, "templates", `template-${template.id}`);
      await setDoc(docRef, {
        name: template.name,
        category: template.category,
        image: template.image,
        author: template.author,
        priceNGN: convertToNGN(template.price),
        discountPriceNGN: template.discountPrice
          ? convertToNGN(template.discountPrice)
          : null,
        rating: template.rating,
        previewUrl: template.previewUrl,
        pages: template.pages,
        isFree: false,
        createdAt: new Date(),
        salesCount: 0,
        tags: [template.category],
      });
      console.log(`Migrated template ${template.id}`);
    }
    console.log("✅ Migration complete!");
  } catch (error) {
    console.error("❌ Migration failed:", error);
  }
};

// Run the migration
migrateTemplates();
