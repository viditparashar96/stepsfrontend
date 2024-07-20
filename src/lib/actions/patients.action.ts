import axios_instance from "../axios";

export const getPatientsByDoctorId = async (doctorId: string) => {
  try {
    const response = await axios_instance.get(`/doctor/${doctorId}/patients`);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllPatients = async () => {
  try {
    const response = await axios_instance.get("/doctor/get-all-patients");
    return response;
  } catch (error) {
    console.log(error);
  }
};
