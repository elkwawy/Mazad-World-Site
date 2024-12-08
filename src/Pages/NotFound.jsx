import error from "../assets/Imgs/NotFound.png";
import { Link, useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();

  return (
    <div className=" flex justify-center ">
      <div className="flex flex-col w-[1322px] box-border pt-6 pb-14">
        <img
          src={error}
          className="h-[280px] max-sm:w-[300px] max-w-[initial] w-[400px] block self-center grow-0 shrink-0 basis-auto box-border"
        />
        <div className="flex justify-start items-stretch flex-col gap-4">
          <p className="[font-family:'Public_Sans',sans-serif] max-sm:text-2xl  text-4xl font-semibold text-center text-[#191c1f] ">
            404, Page not founds
          </p>
          <p className="[font-family:'Public_Sans',sans-serif] text-base px-4 font-normal text-center leading-6 text-[#475156] max-w-[538px] self-center grow-0 shrink-0 basis-auto box-border m-0 p-0">
            Something went wrong. It&apos;s look that your requested could not
            be found. It&apos;s look like the link is broken or the page is
            removed.
          </p>
          <div className="flex justify-center items-center gap-3 ">
            <button
              className="bg-main-color text-white rounded py-3 px-6 border"
              onClick={() => navigate(-1)}
            >
              go back
            </button>
            <button className="py-3 px-6  rounded border">
              {" "}
              <Link to="/">go home </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
