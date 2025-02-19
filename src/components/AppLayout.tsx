import { Outlet } from "react-router";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export function AppLayout() {
  return (
    <div className="w-screen h-screen bg-gray-300 text-gray-700">
      <header className="fixed top-0 left-0 w-full bg-gray-100 text-black z-50">
        <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
          <Logo />
          <Navigation />
        </div>
      </header>
      <main className="pt-16 p-3 w-full md:w-auto"> 
        <Outlet />
      </main>
    </div>
  );
}