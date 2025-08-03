import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Navbar />
    <main>
      <Outlet /> {/* Here is where the routed components will be rendered */}
    </main>
    <Footer />
  </>
);

export default App;
