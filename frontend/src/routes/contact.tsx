import { Navbar } from "../components/Navbar";
import styled from "@emotion/styled";
import { createFileRoute } from "@tanstack/react-router";

const ContactContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ContactInfo = styled.div`
  margin: 1rem 0;
`;

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <>
      <Navbar />
      <ContactContainer>
        <h2>Contact Me</h2>
        <ContactInfo>
          Instagram:{" "}
          <a href="https://instagram.com/your-profile">your-profile</a>
        </ContactInfo>
        <ContactInfo>Phone: +123 456 7890</ContactInfo>
        <ContactInfo>
          Email:{" "}
          <a href="mailto:youremail@example.com">youremail@example.com</a>
        </ContactInfo>
        <ContactInfo>Telegram: @yourusername</ContactInfo>
      </ContactContainer>
    </>
  );
}
