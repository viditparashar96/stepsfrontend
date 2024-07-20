import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Area from "../../components/charts/Area";
import PieC from "../../components/charts/Pie";
import DashboardLoader from "../../components/loaders/DashboardLoader";
import { columns } from "../../components/table/column";
import { DataTable } from "../../components/table/data-table";
import { Heading } from "../../components/ui/heading";
import { Separator } from "../../components/ui/separator";
import { useDoctorPatients } from "../../lib/react-query/quries-mutations";

const Dashboard = () => {
  const user = useSelector((state: any) => state.auth.userData);
  console.log(user);
  const { data: patients, isLoading } = useDoctorPatients(user.id);

  const [patientData, setPatientData] = useState<any>([]);

  useEffect(() => {
    if (patients) {
      console.log(patients);
      setPatientData(patients.data.patients);
    }
  }, [patients]);
  if (isLoading) return <DashboardLoader />;
  return (
    <div>
      <div className=" w-full grid md:grid-cols-2 grid-cols-1 gap-10">
        <Area />
        <PieC />
      </div>

      <div className=" mt-10">
        <Heading title="Patients" description=" Already linked patients" />
        <Separator />
        <div className="mt-4">
          <DataTable columns={columns} data={patientData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
