import logo1 from "../assets/Logo1.png";
import ArrowRight from "../assets/icons/ArrowRight.png";

function Footer() {
  return (
    <footer className="">
      <div className="bg-[#191C1F]">
        <div className="flex text-white justify-center pt-[72px] sm:px-56 mb-10 ">
          <div className="grid  grid-cols-[312px_200px_200px_312px]  max-sm:grid-cols-1 max-sm:p-0 max-xl:grid-cols-[300px_300px_260px]  max-lg:grid-cols-[230px_230px_180px] max-xl:gap-9  max-xl:pl-8 max-xl: gap-4">
            <div className="px-5 mb-3 w-[312px]">
              <div className="  h-[72px] w-full ">
                <img className="w-[177px] h-[48px]" src={logo1} alt="logo" />
              </div>
              <div className=" ph-[48px]">
                <h2 className="text-xs text-[#77878F]">Customer Supports:</h2>
                <h1 className="text-lg font-medium">(629) 555-0129 </h1>
              </div>
              <div className="text-base leading-6	 text-[#77878F] h-[48px] w-[248px]">
                4517 Washington Ave. Manchester, Kentucky 39495
              </div>
              <div className="font-medium text-base">info@kinbo.com</div>
            </div>
            <div className="px-5 mb-3">
              <div className="font-medium text-base">Top Category</div>
              <div className=" text-[#929FA5] font-medium gap-2 flex flex-col text-sm pt-[18px]">
                <div>Computer & Laptop</div>
                <div>SmartPhone</div>
                <div>Headphone</div>
                <div>Accessories</div>
                <div>Camera & Photo</div>
                <div>TV & Homes</div>

                <div className="flex gap-2 text-[#EBC80C]">
                  Browse All Product <img src={ArrowRight} />
                </div>
              </div>
            </div>
            <div className="px-5 mb-3">
              <div className="font-medium text-base">Quick links</div>
              <div className=" text-[#929FA5] font-medium gap-2 flex flex-col text-sm pt-[18px]">
                <div>Shop Product</div>
                <div>Shoping Cart</div>
                <div>Wishlist</div>
                <div>Compare</div>
                <div>Track Order</div>
                <div>Customer Help</div>
                <div>About Us</div>
              </div>
            </div>

            <div className="px-5 mb-3 max-lg:col-span-2  max-md:col-span-2 max-sm:col-span-1">
              <div className="font-medium text-base pb-2">Popular Tag</div>
              <div className="flex flex-col text-center gap-4">
                <div className="flex gap-2 font-medium text-sm">
                  <button className="h-[32px] w-[63px]   bg-gray-800 text-white  hover:bg-gray-700 active:bg-gray-600 transition duration-200 ">
                    Game
                  </button>
                  <button className="h-[32px]  w-[69px]  bg-gray-800 text-white   hover:bg-gray-700 active:bg-gray-600 transition duration-200 ">
                    iPhone
                  </button>
                  <button className="h-[32px]  w-[43px] bg-gray-800 text-white  hover:bg-gray-700 active:bg-gray-600 transition duration-200">
                    TV
                  </button>
                  <button className="h-[32px]  w-[113px] bg-gray-800 text-white  hover:bg-gray-700 active:bg-gray-600 transition duration-200">
                    Asus Laptops
                  </button>
                </div>
                <div className="flex gap-2 font-medium text-sm">
                  <button className="h-[32px] w-[85px] bg-gray-800 text-white  hover:bg-gray-700 active:bg-gray-600 transition duration-200">
                    Macbook
                  </button>
                  <button className="h-[32px] w-[53px] bg-gray-800 text-white  hover:bg-gray-700 active:bg-gray-600 transition duration-200">
                    SSD
                  </button>
                  <button className="h-[32px] w-[117px] bg-gray-800 text-white  hover:bg-gray-700 active:bg-gray-600 transition duration-200">
                    Graphics Card
                  </button>
                </div>
                <div className="flex gap-2 font-medium text-sm">
                  <button className="h-[32px] w-[102px] bg-gray-800 text-white  hover:bg-gray-700 active:bg-gray-600 transition duration-200">
                    Power Bank
                  </button>
                  <button className="h-[32px] w-[87px] bg-gray-800 text-white  hover:bg-gray-700 active:bg-gray-600 transition duration-200">
                    Smart TV
                  </button>
                  <button className="h-[32px] w-[79px] bg-gray-800 text-white  hover:bg-gray-700 active:bg-gray-600 transition duration-200">
                    Speaker
                  </button>
                </div>
                <div className="flex gap-2 font-medium text-sm">
                  <button className="h-[32px] w-[66px] bg-gray-800 text-white  hover:bg-gray-700 active:bg-gray-600 transition duration-200">
                    Tablet
                  </button>
                  <button className="h-[32px] w-[95px] bg-gray-800 text-white  hover:bg-gray-700 active:bg-gray-600 transition duration-200">
                    Microwave
                  </button>
                  <button className="h-[32px] w-[86px] bg-gray-800 text-white  hover:bg-gray-700 active:bg-gray-600 transition duration-200">
                    Samsung
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-700 text-center text-white py-2">
          Kinbo - eCommerce Template © 2021. Design by Templatecookie
        </div>
      </div>
    </footer>
  );
}

export default Footer;
