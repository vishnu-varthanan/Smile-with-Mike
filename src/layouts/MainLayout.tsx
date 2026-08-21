import { Outlet } from "react-router-dom";
import CursorDot from "@/components/common/CursorDot";
import MikeAssistant from "@/components/chatbot/MikeAssistant";
import BottomNav from "@/components/layout/BottomNav";
import Footer from "@/components/layout/Footer";
import SiteHeader from "@/components/layout/SiteHeader";

export default function MainLayout() {
  return (
    <div className="bg-paper text-ink min-h-screen pb-24">
      <CursorDot />
      <SiteHeader />
      <Outlet />
      <Footer />
      <BottomNav />
      <MikeAssistant />
    </div>
  );
}
