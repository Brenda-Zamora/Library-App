import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} LibraryApp. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;

// Styled component
const FooterContainer = styled.footer`
  background: #111827;
  color: #d1d5db;
  text-align: center;
  padding: 1rem;
  margin-top: 4rem;
  font-size: 0.9rem;
`;
