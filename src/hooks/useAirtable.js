import { writeInfoToTable } from "../api/airtableAPI";

export const useAirtable = () => {
  const addInfo = async (info) => {
    try {
      const response = await writeInfoToTable(info);
      return response;
    } catch (error) {
      console.error("Write failed:", error.message);
      throw error;
    }
  };
  return { addInfo };
};
