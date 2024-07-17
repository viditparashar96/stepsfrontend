import axios_instance from "../axios";

export const getPatientsByDoctorId = async (doctorId: string) => {
  try {
    const response = await axios_instance.get(`/doctor/${doctorId}/patients`);

    return response;
  } catch (error) {
    console.log(error);
  }
};
