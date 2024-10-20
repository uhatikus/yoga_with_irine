import { Navbar } from "../components/Navbar";
import styled from "@emotion/styled";
import { createFileRoute } from "@tanstack/react-router";

const ScheduleContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;
export const Route = createFileRoute("/schedule")({
  component: Schedule,
});

function Schedule() {
  return (
    <>
      <Navbar />
      <ScheduleContainer>
        <h2>Upcoming Yoga Classes</h2>
        {/* <Calendar /> */}
      </ScheduleContainer>
    </>
  );
}
