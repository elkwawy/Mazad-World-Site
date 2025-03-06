import { useState } from "react";
import axiosInstance from "@/hooks/axiosInstance";
export default function useCategoriesHook() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const FetchCategories = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("v1/category/show");
      setCategories(response.data.categories);
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Category not found!";
      console.log(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return { categories, loading, FetchCategories };
}
