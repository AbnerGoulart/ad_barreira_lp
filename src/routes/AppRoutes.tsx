import { Routes, Route } from "react-router";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Messages } from "../pages/Messages";
import { Services } from "../pages/Services";
import { NotFound } from "../pages/NotFound";
import { AppLayout } from "../components/AppLayout";

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/services" element={<Services />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}