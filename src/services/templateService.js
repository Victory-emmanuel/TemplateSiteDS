import { db } from "../firebase/config"; // Now this will work
import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  getDoc,
} from "firebase/firestore";

export const getTemplates = async () => {
  try {
    const q = query(collection(db, "templates"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => {
      const data = doc.data();

      // Safe timestamp conversion
      const createdAt = data.createdAt
        ? convertFirestoreTimestamp(data.createdAt)
        : new Date();

      return {
        id: doc.id,
        ...data,
        createdAt,
      };
    });
  } catch (error) {
    console.error("Error fetching templates:", error);
    return [];
  }
};

// Helper function for timestamp conversion
const convertFirestoreTimestamp = (timestamp) => {
  if (timestamp?.toDate) {
    return timestamp.toDate();
  }
  if (timestamp?.seconds) {
    return new Date(timestamp.seconds * 1000);
  }
  return new Date();
};

export const getTemplateById = async (id) => {
  try {
    const docRef = doc(db, "templates", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  } catch (error) {
    console.error("Error fetching template:", error);
    return null;
  }
};
