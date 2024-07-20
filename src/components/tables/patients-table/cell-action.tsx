"use client";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLinkPatient } from "../../../lib/react-query/quries-mutations";
import { Button } from "../../ui/button";

const CellAction: React.FC<any> = ({ data }) => {
  const navigate = useNavigate();
  console.log("data in cell-actions===>", data);
  const user = useSelector((state: any) => state.auth.userData);
  const isAlreadyLinked = data.doctors.some(
    (doc: any) => doc.doctorId === user.id
  );
  console.log("isAlreadyLinked===>", isAlreadyLinked);
  const {
    mutateAsync: linkPatient,
    isPending,
    isError,
  } = useLinkPatient(user.id);

  const handleLink = async () => {
    try {
      await linkPatient({ doctorId: user.id, patientId: data.id });
      navigate("/");
    } catch (error: any) {
      console.log(error);
    }
  };

  if (isPending)
    return <Button className="bg-red-500 text-white">Loading...</Button>;
  if (isError) return <Button className="bg-red-500 text-white">Error</Button>;
  console.log("Pateint data===>", data);
  return (
    <Button
      className={`
      ${isAlreadyLinked ? "bg-red-500" : "bg-green-500"} 
      text-white
    `}
      onClick={handleLink}
    >
      {isAlreadyLinked ? "Unlink" : "Link"}
    </Button>
  );
};

export default CellAction;
