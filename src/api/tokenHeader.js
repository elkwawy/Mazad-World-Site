import Cookies from "js-cookie";

export const tokenHeader = () => {
  const token = Cookies.get("token");
  return { headers: { Authorization: JSON.parse(token) } };
};
