// src/pages/TempMigrationPage.jsx
import { useEffect } from "react";
import { migrateTemplates } from "../scripts/seedTemplates";

const TempMigrationPage = () => {
  useEffect(() => {
    migrateTemplates();
  }, []);

  return <div>Running template migration...</div>;
};

export default TempMigrationPage;
