import Skeleton from "react-loading-skeleton";

const CategoriesSkeleton = () => {
  return (
    <div
     
      className="flex flex-col items-center gap-3 bg-gray-100 p-3 rounded-md text-center"
    >
      <Skeleton width={100} height={100} className="rounded-md" />
      <Skeleton width={80} height={20} />
    </div>
  );
};

export default CategoriesSkeleton;
