import { Route, Routes, Navigate } from "react-router-dom";
import App from "./App.jsx";

//Import Pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Borrow from "./pages/Borrow";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Wishlist from "./pages/Wishlist";

// Import Admin Pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AddBook from "./pages/Admin/AddBook";
import EditBook from "./pages/Admin/EditBook";
import ManageUsers from "./pages/Admin/ManageUsers";

//Import Components
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";

const MainRouter = () => (
  <Routes>
    {/* Main Layout */}
    {/* This route will render the App component which includes Navbar and Footer */}
    <Route path="/" element={<App />}>
      {/* Public Routes */}
      <Route index element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="books" element={<Books />} />
      <Route path="books/:id" element={<BookDetails />} />
      <Route path="borrow" element={<Borrow />} />
      <Route path="cart" element={<Cart />} />
      <Route path="orders" element={<Orders />} />
      <Route path="wishlist" element={<Wishlist />} />

      {/* Profile just for authenticated users */}
      <Route
        path="profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />

      {/* Admin routes */}
      <Route
        path="admin"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />
      <Route
        path="admin/add-book"
        element={
          <AdminRoute>
            <AddBook />
          </AdminRoute>
        }
      />
      <Route
        path="admin/edit-book/:id"
        element={
          <AdminRoute>
            <EditBook />
          </AdminRoute>
        }
      />
      <Route
        path="admin/manage-users"
        element={
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        }
      />

      {/* Redirect to home if no route matches */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
);

export default MainRouter;
