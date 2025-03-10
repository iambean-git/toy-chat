import { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose, IoMenu, IoChevronForward, IoHomeOutline, IoTrailSignOutline  } from "react-icons/io5";
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
      <div className="hidden md:flex flex-col w-72 h-screen bg-[#fafafa] ">
        <div className="flex justify-between items-center pt-7 px-7 mb-2 ">
          <span>홍길동님</span>
          <span> <FaRegBell/> </span>
        </div>
        <nav className="flex-1 p-4 text-xl text-gray-500">
          <ul>
            {menuList.map((i) =>
              <li>
                <Link to={i.link} className="flex justify-start items-center relative mt-2 p-3
                                              rounded-lg bg-white hover:bg-[#e4f0ff] hover:text-[#2e6eea]">
                  {i.icon}
                  <span className="ml-3">{i.name}</span>
                  <IoChevronForward className="absolute right-3"/>
                </Link>
              </li>
            )}

          </ul>
        </nav>
        <div className="w-full flex justify-center items-center ">
          <button className="mb-6 border border-gray-400 px-12 py-2 text-center *
                            rounded-lg text-sm text-gray-400
                             hover:bg-white hover:text-[#2e6eea] hover:border-[#2e6eea]">로그아웃</button>
        </div>
        
      </div>

      {/* 모바일 메뉴 버튼 */}
      <div className="md:hidden w-full h-fit p-4 flex justify-between items-center">
        <button
          onClick={toggleMobileMenu}
        >
          <IoMenu className="text-2xl bg-transparent text-gray-800" />
        </button>
        <div><FaRegBell/></div>

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
              <ul className="text-center text-gray-500">
                {menuList.map((i) =>
                  <li>
                    <Link to={i.link} className="block py-2 hover:bg-[#e4f0ff] hover:text-[#2e6eea] rounded-lg">
                      <span>{i.name}</span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
