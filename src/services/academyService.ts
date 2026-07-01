import axios from "axios";
import { AcademyPayload } from "../interface/academyPayload";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const createAcademy = async (academyPayload: AcademyPayload) => {
  const response = await axios.post(`http://${apiUrl}/signup`, academyPayload);
  return response.data;
};
