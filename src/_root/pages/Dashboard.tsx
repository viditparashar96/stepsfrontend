import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Area from "../../components/charts/Area";
import PieC from "../../components/charts/Pie";
import { columns } from "../../components/table/column";
import { DataTable } from "../../components/table/data-table";
import { useDoctorPatients } from "../../lib/react-query/quries-mutations";

const data = [
  {
    id: "728ed52f",
    name: "Vidit",
    status: "pending",
    email: "m@example.com",
  },
];
const Dashboard = () => {
  const user = useSelector((state: any) => state.auth.userData);
  console.log(user);
  const {
    data: patients,
    isLoading,
    isError,
    error,
  } = useDoctorPatients(user.id);

  const [patientData, setPatientData] = useState<any>([]);

  useEffect(() => {
    if (patients) {
      console.log(patients);
      setPatientData(patients.data.patients);
    }
  }, [patients]);
  return (
    <div>
      <div className=" w-full grid md:grid-cols-2 grid-cols-1 gap-10">
        <Area />
        <PieC />
      </div>
      <div className=" mt-10">
        <DataTable columns={columns} data={patientData} />
      </div>
    </div>
  );
};

export default Dashboard;
