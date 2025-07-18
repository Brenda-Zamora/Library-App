import { Route, Routes } from "react-router-dom";

//Import Pages
import Home from "./src/pages/Home.jsx";
import SignIn from "./src/pages/SignIn.jsx";
import SignUp from "./src/pages/SignUp.jsx";
import Profile from "./src/pages/Profile.jsx";
import Books from "./src/pages/Books.jsx";
import BookDetails from "./src/pages/BookDetails.jsx";
import AdminDashboard from "./src/pages/AdminDashboard.jsx";
import AddBook from "./src/pages/AddBook.jsx";

//Import Components
import Layout from "./src/components/Layout.jsx";
import Footer from "./src/components/Footer/Footer.jsx";
//import PrivateRoute from "./src/components/PrivateRoute.jsx";
//import AdminRoute from "./src/components/AdminRoute.jsx";

const MainRouter = () => {
  return (
    <div>
      <Layout />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />

        {/* Profile just for authenticated users */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        {/* Admin routes */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/add-book"
          element={
            <AdminRoute>
              <AddBook />
            </AdminRoute>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
};
export default MainRouter;
