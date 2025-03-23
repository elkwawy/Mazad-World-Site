import Loader from "../../utils/LoaderW";
import { FaArrowRight } from "react-icons/fa";
const ButtonForm = ({ title, loading }) => {
  return (
    <button
      type="submit"
      className="relative flex items-center justify-center gap-2 w-full bg-sec-color text-white border-[1px] py-3 rounded-md hover:opacity-85 trans disabled:cursor-not-allowed "
    >
      <span
        className={`flex items-center gap-2 ${
          loading ? "invisible" : "visible"
        }`}
      >
        {title}
      </span>
      {loading && <Loader className="w-[20px] mr-12" />}
    </button>
  );
};

export default ButtonForm;
