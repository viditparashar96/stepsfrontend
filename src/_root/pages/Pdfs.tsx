import { PdfClient } from "../../components/tables/pdfs-table/client";
import { users } from "../../constants/data";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "User", link: "/dashboard/user" },
];
const Pdfs = () => {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <PdfClient data={users} />
      </div>
    </>
  );
};

export default Pdfs;
