import { useEffect, useState } from "react";
import { UserClient } from "../../components/tables/patients-table/client";
import { users } from "../../constants/data";
import { getAllPatients } from "../../lib/actions/patients.action";
import { useGetAllPatients } from "../../lib/react-query/quries-mutations";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "User", link: "/dashboard/user" },
];
const Patients = () => {
  const [allPatients,setAllPatients]=useState([])
  const { 
      data:patients,
      isError,
      isLoading
    
  }=useGetAllPatients()
  useEffect(()=>{
    if(patients) setAllPatients(patients.data.patients)
      if(isError) console.log(isError)
  },[])
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <UserClient data={allPatients} />
      </div>
    </>
  );
};

export default Patients;
