import { useEffect, useState } from "react";
import PatientsLoader from "../../components/loaders/PatientsLoader";
import { UserClient } from "../../components/tables/patients-table/client";
import axios_instance from "../../lib/axios";

const Patients = () => {
  const [allPatients, setAllPatients] = useState([]);
  // const {
  //     data:patients,
  //     isError,
  //     isLoading

  // }=useGetAllPatients()
  const [loading, setLoading] = useState(false);
  const getAllPatients = async () => {
    try {
      setLoading(true);
      const response = await axios_instance.get("/doctor/get-all-patients");
      if (response.data) {
        console.log(response.data);
        setAllPatients(response.data.patients);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllPatients();
  }, []);
  if (loading) {
    return <PatientsLoader />;
  }
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <UserClient data={allPatients} />
      </div>
    </>
  );
};

export default Patients;
