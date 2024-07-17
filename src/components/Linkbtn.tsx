import { useSelector } from "react-redux";
import { useLinkPatient } from "../lib/react-query/quries-mutations";
import { Button } from "./ui/button";

const Linkbtn = ({ data }: any) => {
  const user = useSelector((state: any) => state.auth.userData);
  const {
    mutateAsync: linkPatient,
    isPending,
    isError,
  } = useLinkPatient(user.id);

  const handleLink = async () => {
    try {
      await linkPatient({ doctorId: user.id, patientId: data.id });
    } catch (error: any) {
      console.log(error);
    }
  };
  if (isPending)
    return <Button className="bg-red-500 text-white">Loading...</Button>;
  if (isError) return <Button className="bg-red-500 text-white">Error</Button>;
  console.log("Pateint data===>", data);
  return (
    <Button className="bg-red-500 text-white" onClick={handleLink}>
      Unlink
    </Button>
  );
};

export default Linkbtn;
