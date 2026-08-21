
import { Outlet } from "react-router";
import Header from "./header";
import Footer from "./footer";

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
