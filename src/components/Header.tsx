import { Navigation } from "./Navigation"
import { Logo } from "./Logo"

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-neutral-100 text-black z-50 border-b-1 border-gray-300">
    <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
      <Logo />
      <Navigation />
    </div>
  </header>
  );
}
