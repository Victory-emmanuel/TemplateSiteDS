// src\scripts\seedTemplates.js
import { app } from "../firebase/config";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { templates } from "../data/templates";

const db = getFirestore(app);

const migrateTemplates = async () => {
  try {
    for (const template of templates) {
      await addDoc(collection(db, "templates"), {
        ...template,
        priceNGN: template.price * 800,
        originalPriceNGN: template.discountPrice
          ? template.discountPrice * 800
          : null,
        isFree: false,
        createdAt: new Date().toISOString(),
      });
      console.log(`Added ${template.name}`);
    }
    console.log("Migration completed!");
  } catch (error) {
    console.error("Migration failed:", error);
  }
};

migrateTemplates();
