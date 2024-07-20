// ============================================================
// GET QUERIES
// ============================================================

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  currentDoctor,
  getPdfsbyDoctor,
  linkPatient,
  loginDoctor,
  registerDoctor,
} from "../actions/doctor.actions";
import {
  getAllPatients,
  getPatientsByDoctorId,
} from "../actions/patients.action";
import { deletePdfById, uploadPdf } from "../actions/pdf.action";
import { QUERY_KEYS } from "./quiryKeys";

export const useCurrentDoctor = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_CURRENT_USER],

    queryFn: () => currentDoctor(),
  });
};

export const useDoctorPatients = (doctorId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_DOCTOR_PATIENTS, doctorId],
    queryFn: () => getPatientsByDoctorId(doctorId),
  });
};

export const useGetAllPatients = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_All_PATIENTS],
    queryFn: () => getAllPatients(),
  });
};

export const useGetPdfsByDoctor = (doctorId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_PDFS_BY_DOCTOR, doctorId],
    queryFn: () => getPdfsbyDoctor(),
  });
};

// ============================================================
// POST QUERIES
// ============================================================

export const useCreateDoctorAccount = () => {
  return useMutation({
    mutationFn: (data: { name: string; email: string; password: string }) =>
      registerDoctor(data),
  });
};

export const useLoginDoctor = () => {
  return useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      loginDoctor(data),
  });
};

export const useLinkPatient = (doctorId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { doctorId: string; patientId: string }) =>
      linkPatient(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_DOCTOR_PATIENTS, doctorId],
      });
    },
  });
};

export const useUploadPdf = () => {
  return useMutation({
    mutationFn: (data: any) => uploadPdf(data),
  });
};

export const useDeletePdf = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deletePdfById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PDFS_BY_DOCTOR],
      });
    },
  });
};
