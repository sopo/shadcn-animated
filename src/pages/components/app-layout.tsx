import Footer from "@/components/domain/footer";
import Header from "@/components/domain/header";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <main className="flex flex-col">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};
export default AppLayout;
