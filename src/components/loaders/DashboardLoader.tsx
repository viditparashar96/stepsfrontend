import { Skeleton } from "../ui/skeleton";

const DashboardLoader = () => {
  return (
    <div>
      <div className=" w-full grid md:grid-cols-2 grid-cols-1 gap-10">
        <Skeleton className="h-96" />
        <Skeleton className="h-96" />
      </div>
      <div className=" mt-10 w-full">
        <Skeleton className="h-100" />
      </div>
    </div>
  );
};

export default DashboardLoader;
