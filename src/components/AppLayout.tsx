import { Outlet } from "react-router";
import { Header } from "./Header";

export function AppLayout() {
  return (
    <div className="w-screen h-screen bg-gray-300 text-gray-700">
      <Header />
      <main className="w-full md:w-auto"> 
        <Outlet />
      </main>
    </div>
  );
}