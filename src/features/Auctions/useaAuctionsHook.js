import { useState } from "react";
import axiosInstance from "@/hooks/axiosInstance";
export default function useaAuctionsHook() {
  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(false);

  const FetchAuctions = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("v1/auctions/show");
      setAuctions(response.data.auctions);
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Auction not found!";
      console.log(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return { auctions, loading, FetchAuctions };
}
