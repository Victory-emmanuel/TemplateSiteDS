import { app } from "../firebase/config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);

const templateService = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "templates"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching templates:", error);
    return [];
  }
};

export default templateService;
