import styled from "@emotion/styled";
import { createFileRoute } from "@tanstack/react-router";

const ContactContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ContactInfo = styled.div`
  margin: 1rem 0;
`;

export const Route = createFileRoute("/certificate")({
  component: Certificate,
});

function Certificate() {
  return <></>;
}
