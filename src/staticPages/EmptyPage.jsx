import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
const EmptyPage = ({ name }) => {
  const navigate = useNavigate();
  return (
    <div className="col-span-full flex flex-col items-center -mt-6 justify-center h-[89vh] text-gray-600">
      <IoClose className="w-20 h-20 text-gray-800" />

      <h2 className="text-2xl font-semibold mt-3">No {name} Available</h2>

      <p className="text-md text-gray-500 mt-2">
        Sorry, there are no {name.toLowerCase()} available at the moment. Please
        check back later.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-5 px-6 py-3 bg-sec-color text-white font-medium rounded-lg shadow-md 
                 hover:ml-2 transition-all duration-300 ease-in-out"
      >
        Back to Home
      </button>
    </div>
  );
};

export default EmptyPage;
