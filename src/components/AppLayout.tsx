import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function AppLayout() {
  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-700 overflow-x-hidden">
      <Header />
      <main className="w-full md:w-auto mt-16 md:mt-16"> 
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}