import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose, IoMenu, IoChevronForward, IoHomeOutline, IoTrailSignOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuList = [
    {
      name: "HOME",
      link: "/",
      icon: <IoHomeOutline />
    },
    {
      name: "PAGE1",
      link: "/page1",
      icon: <IoTrailSignOutline />
    },
    {
      name: "PAGE2",
      link: "/page2",
      icon: <IoTrailSignOutline />
    }
  ];


  return (
    <>
      {/* 데스크탑 사이드바 */}
      <div className="hidden md:flex flex-col w-80 h-screen  bg-gray-100 ">
        {/* <div className="h-20 flex justify-between items-center px-7 text-lg  bg-[#2e6eea] text-white">
            <span>홍길동님</span>
            <span className="ml-15 text-2xl relative"> 
              <FaRegBell  /> 
              <div className="size-1.5 rounded-full bg-red-400 absolute -top-1 -right-1.5"></div>
            </span>
        </div> */}

        <div className="h-20 flex justify-end items-center px-7 text-lg  bg-[#2e6eea] text-white">
            <button className="border rounded-lg py-2 px-4 text-sm">로그인</button>
        </div>

        <nav className="flex-1 p-4 text-xl text-gray-500">
          <ul>
            {menuList.map((i) =>
              <li key={i.name}>
                <Link to={i.link} className={`flex justify-start items-center relative mt-2 p-3
                                              rounded-lg  hover:bg-[#e4f0ff] hover:text-[#2e6eea]
                                              ${currentPath === i.link ? "bg-[#e4f0ff] text-[#2e6eea]" : "bg-white"}`}>
                  {i.icon}
                  <span className="ml-3">{i.name}</span>
                  <IoChevronForward className="absolute right-3" />
                </Link>
              </li>
            )}

          </ul>
        </nav>
      </div>

      {/* 모바일 버전 사이드바 */}
      <div className="md:hidden w-full h-fit p-4 flex justify-between items-center">
        <div className="w-full pt-2 pr-1 flex justify-between">
          <button
            onClick={toggleMobileMenu}
          >
            <IoMenu className="text-2xl bg-transparent text-gray-800" />
          </button>
          <div className="text-2xl"><FaRegBell /></div>
        </div>


        {isMobileMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-fit bg-gray-100 z-10">
            <div className="p-4">
              <button
                className="fixed top-3 right-3 bg-transparent "
                onClick={toggleMobileMenu}
              >
                <IoClose className=" text-3xl text-gray-500" />
              </button>
            </div>
            <nav className="p-4">
              <ul className="text-left font-semibold text-gray-500">
                {menuList.map((i) =>
                  <li>
                    <Link to={i.link} className="block py-4  hover:text-[#2e6eea]" onClick={toggleMobileMenu} >
                      <span>{i.name}</span>
                    </Link>
                  </li>
                )}
                <div className="border-t border-t-gray-300 my-4"></div>

                <li>
                  <button className="w-full text-left py-2 text-gray-400 hover:text-[#2e6eea] ">LOGOUT</button>
                </li>

              </ul>

            </nav>
          </div>
        )}
      </div>
    </>
  );
}
