import axios_instance from "../axios";

export const registerDoctor = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios_instance.post(`/doctor/register`, data);
    return response;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export const loginDoctor = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios_instance.post(`/doctor/login`, data);
    return response;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export const currentDoctor = async () => {
  try {
    const response = await axios_instance.get(`/doctor/currentDoctor`);
    return response;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export const linkPatient = async (data: {
  doctorId: string;
  patientId: string;
}) => {
  try {
    const response = await axios_instance.post(`/doctor/link-patient`, data);
    return response;
  } catch (error: any) {
    console.log(error);
  }
};

export const getPdfsbyDoctor = async () => {
  try {
    const response = await axios_instance.get(`/doctor/get-all-pdfs`);
    return response;
  } catch (error: any) {
    console.log(error);
  }
};
