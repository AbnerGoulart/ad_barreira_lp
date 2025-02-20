import { Outlet } from "react-router";
import { Header } from "./Header";

export function AppLayout() {
  return (
    <div className="w-screen h-screen bg-gray-100 text-gray-700 overflow-x-hidden">
      <Header />
      <main className="w-full md:w-auto mt-19 md:mt-0"> 
        <Outlet />
      </main>
    </div>
  );
}