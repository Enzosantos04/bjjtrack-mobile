import { AcademyData } from "./academyData";
import { AdminData } from "./adminData";

export interface AcademyPayload {
  academy: AcademyData;
  admin: AdminData;
}
