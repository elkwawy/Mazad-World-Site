import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/features/categories/categoriesSlice";
import { fetchAuctions } from "@/features/auctions/auctionsSlice";
import { fetchSellers } from "@/features/sellers/sellersSlice";
import { fetchCustomers } from "../../../redux/slices/customersSlice";
import Skeleton from "react-loading-skeleton";
const StatusAboutUs = () => {
  const dispatch = useDispatch();
  const { auctions, status: statusAuctions } = useSelector(
    (state) => state.auctions
  );
  const { sellers, status: statusSellers } = useSelector(
    (state) => state.sellers
  );
  const { categories, status: statusCategories } = useSelector(
    (state) => state.categories
  );
  const { customers, status: statusCustomers } = useSelector(
    (state) => state.customers
  );

  useEffect(() => {
    if (statusAuctions === "idle") dispatch(fetchAuctions());
    if (statusSellers === "idle") dispatch(fetchSellers());
    if (statusCategories === "idle") dispatch(fetchCategories());
    if (statusCustomers === "idle") dispatch(fetchCustomers());
  }, [
    dispatch,
    statusAuctions,
    statusSellers,
    statusCategories,
    statusCustomers,
  ]);

  const stats = [
    {
      label: "Auctions",
      count: auctions.length,
      status: statusAuctions,
    },
    {
      label: "Categories",
      count: categories.length,
      status: statusCategories,
    },
    {
      label: "Customers",
      count: customers.length,
      status: statusCustomers,
    },
    {
      label: "Sellers",
      count: sellers.length,
      status: statusSellers,
    },
  ];

  return (
    <div className="containerAK py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(({ label, count, status }) => (
          <div key={label} className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">
              {status === "loading" ? (
                <Skeleton width={38} height={38} />
              ) : (
                count
              )}
            </div>
            <div className="text-gray-600">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusAboutUs;
