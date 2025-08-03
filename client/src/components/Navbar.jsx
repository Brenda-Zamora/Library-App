import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <Nav>
      <Logo to="/">LibraryApp</Logo>
      <NavLinks>
        <StyledLink to="/books">Books</StyledLink>
        {user ? (
          <>
            <StyledLink to="/profile">Profile</StyledLink>
            {user.role === "admin" && (
              <StyledLink to="/admin">Admin</StyledLink>
            )}
            <LogoutButton onClick={logout}>Log Out</LogoutButton>
          </>
        ) : (
          <>
            <StyledLink to="/signin">Sign In</StyledLink>
            <StyledLink to="/signup">Sign Up</StyledLink>
          </>
        )}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

// Styled Components
const Nav = styled.nav`
  background: #1f2937;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  color: #facc15;
  text-decoration: none;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #facc15;
  }
`;

const LogoutButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #f87171;
  }
`;
