// ============================================================
// GET QUERIES
// ============================================================

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  currentDoctor,
  linkPatient,
  loginDoctor,
  registerDoctor,
} from "../actions/doctor.actions";
import { getPatientsByDoctorId } from "../actions/patients.action";
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
