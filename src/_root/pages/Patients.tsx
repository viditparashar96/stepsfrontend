import { UserClient } from "../../components/tables/patients-table/client";
import { users } from "../../constants/data";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "User", link: "/dashboard/user" },
];
const Patients = () => {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <UserClient data={users} />
      </div>
    </>
  );
};

export default Patients;
