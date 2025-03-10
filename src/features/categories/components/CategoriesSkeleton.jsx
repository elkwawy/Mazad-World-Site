import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CategoriesSkeleton = () => {
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex flex-col gap-4">
        <Skeleton height={25} width={120} />
        <Skeleton height={30} width={150} />
        <Skeleton height={35} width={120} />
      </div>
      <div className="w-[176px] h-[176px] rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
        <Skeleton width={184} height={184} />
      </div>
    </div>
  );
};

export default CategoriesSkeleton;
