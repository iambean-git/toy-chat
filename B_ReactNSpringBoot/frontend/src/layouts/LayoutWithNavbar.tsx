import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function LayoutWithNavbar() {
  return (

    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* 왼쪽 사이드바 (Navbar) */}
      <Navbar />

      {/* 오른쪽 컨텐츠 영역 (라우팅된 페이지) */}
      <div className="flex-grow p-4 md:overflow-y-auto md:p-12 flex justify-center">
        <div className="w-full max-w-[1280px] ">
          <Outlet />
        </div>

      </div>
    </div>
  );
}
