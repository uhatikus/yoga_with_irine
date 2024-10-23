import styled from "@emotion/styled";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: "#FAFAFA";
  color: white;
`;

const NavLinks = styled.div`
  a {
    margin-left: 2rem;
    color: white;
    text-decoration: none;
  }
`;

export const Navbar = () => (
  <Nav>
    <div>Yoga Open Soul</div>
    <NavLinks></NavLinks>
  </Nav>
);
