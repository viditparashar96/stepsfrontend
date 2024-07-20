import { useSelector } from "react-redux";
import PdfsLoader from "../../components/loaders/PdfsLoader";
import { PdfClient } from "../../components/tables/pdfs-table/client";
import { useGetPdfsByDoctor } from "../../lib/react-query/quries-mutations";

const Pdfs = () => {
  const user = useSelector((state: any) => state.auth.userData);
  const { data: pdfs, isLoading } = useGetPdfsByDoctor(user.id);
  if (isLoading) return <PdfsLoader />;
  console.log("pdfs===>", pdfs);
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <PdfClient data={pdfs?.data.pdfs} />
      </div>
    </>
  );
};

export default Pdfs;
