import { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose, IoMenu, IoChevronForward, IoHomeOutline, IoTrailSignOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
export default function Navbar() {
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
        <div className="flex justify-start items-center pt-7 px-7 mb-2 text-lg relative">
          <span>홍길동님</span>
          <span className="ml-3 text-lg"> <FaRegBell /> </span>
          <button className="absolute right-7 text-sm border p-2 rounded-lg border-gray-400 text-gray-500">로그아웃</button>
        </div>
        <nav className="flex-1 p-4 text-xl text-gray-500">
          <ul>
            {menuList.map((i) =>
              <li>
                <Link to={i.link} className="flex justify-start items-center relative mt-2 p-3
                                              rounded-lg bg-white hover:bg-[#e4f0ff] hover:text-[#2e6eea]">
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
