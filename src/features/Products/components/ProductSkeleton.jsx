import Skeleton from "react-loading-skeleton";

export default function ProductSkeleton() {
  return (
    <div className="bg-white p-4 border border-gray-100 rounded-lg shadow-sm">
      <Skeleton height={245} className="mb-4" />
      <Skeleton height={20} width="80%" className="mb-2" />
      <div className="flex justify-between items-center">
        <Skeleton height={25} width="60px" />
        <Skeleton height={30} width="30px" circle />
      </div>
    </div>
  );
}
