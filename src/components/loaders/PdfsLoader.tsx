import { Skeleton } from "../ui/skeleton";

const PdfsLoader = () => {
  return (
    <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
      <Skeleton className="h-96" />
    </div>
  );
};

export default PdfsLoader;
