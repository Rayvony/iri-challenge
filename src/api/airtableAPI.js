import axios from "axios";

const AIRTABLE_USERS_BASE_ID = import.meta.env.VITE_AIRTABLE_USERS_BASE_ID;
const AIRTABLE_STUDENTS_BASE_ID = import.meta.env.VITE_AIRTABLE_STUDENTS_BASE_ID;
const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const USERS_TABLE_NAME = "Users";
const STUDENTS_TABLE_NAME = "Students";

const readTableEndpoint = `https://api.airtable.com/v0/${AIRTABLE_USERS_BASE_ID}/${USERS_TABLE_NAME}`;
const writeTableEndpoint = `https://api.airtable.com/v0/${AIRTABLE_STUDENTS_BASE_ID}/${STUDENTS_TABLE_NAME}`;

const headers = {
  Authorization: `Bearer ${AIRTABLE_API_KEY}`,
  "Content-Type": "application/json",
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.get(readTableEndpoint, {
      headers,
      params: {
        filterByFormula: `AND({email} = '${email}', {password} = '${password}')`,
      },
    });

    const user = response.data.records[0];
    return user;
  } catch (error) {
    throw error;
  }
};

export const writeInfoToTable = async (info) => {
  try {
    const response = await axios.post(writeTableEndpoint, { fields: info }, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};
