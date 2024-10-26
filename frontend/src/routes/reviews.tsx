import styled from "@emotion/styled";
import { createFileRoute } from "@tanstack/react-router";

const ReviewSection = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Review = styled.blockquote`
  margin: 2rem 0;
  font-style: italic;
`;

export const Route = createFileRoute("/reviews")({
  component: Reviews,
});

function Reviews() {
  return (
    <>
      <ReviewSection>
        <h2>Student Reviews</h2>
        <Review>
          "Yoga with Open Soul has transformed my life. The peaceful environment
          and expert guidance helped me achieve mental and physical balance."
        </Review>
        <Review>
          "I love the way every session is unique and personalized!"
        </Review>
      </ReviewSection>
    </>
  );
}
