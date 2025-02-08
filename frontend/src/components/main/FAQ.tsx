import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQAccordion = () => {
  const [openIndexes, setOpenIndexes] = useState(new Set());

  const faqData = [
    {
      question: "What is the Hatha Flow Yoga?",
      answers: [
        "Hatha Flow yoga combines static asanas with dynamic exercises, synchronized with breathing to build strength, flexibility, and balance :)",
      ],
    },
    {
      question: "What are the parts of the class?",
      answers: [
        "The class lasts 1.5 h and contains:",
        "The first part of Breathing Exercises and Meditation to set a calm mood and to center the mind.",
        "Then we proceed to the sequence of Asanas, targeting all muscle groups, combining dynamic movements with static poses, always focusing on the target zones.",
        "At the end of the practice, we will fully relax in Shavasana.",
      ],
    },
    {
      question: "What's the leve of the practicel?",
      answers: [
        "The level is open. It's perfect for beginners and I also suggest variations for the intermediate level.",
      ],
    },
    {
      question: "Is that okay if I've never done yoga before?",
      answers: [
        "Yes, of course. A lot of people with no experience in yoga come to my classes :) And actually they really enjoy them and start their journey in yoga.",
      ],
    },
  ];

  const containerStyle = {
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "16px",
  };

  const questionContainerStyle = {
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    marginBottom: "16px",
  };

  const questionTextStyle = {
    fontWeight: "500",
    flex: 1,
    paddingRight: "16px",
  };

  const toggleQuestion = (index: number) => {
    const newOpenIndexes = new Set(openIndexes);
    if (newOpenIndexes.has(index)) {
      newOpenIndexes.delete(index);
    } else {
      newOpenIndexes.add(index);
    }
    setOpenIndexes(newOpenIndexes);
  };

  const isOpen = (index: number) => openIndexes.has(index);

  return (
    <div style={containerStyle}>
      {faqData.map((item, index) => (
        <div key={index} style={questionContainerStyle}>
          <button
            onClick={() => toggleQuestion(index)}
            style={{
              width: "100%",
              padding: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "white",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <span style={questionTextStyle}>{item.question}</span>
            {isOpen(index) ? (
              <ChevronUp size={20} color="#666" />
            ) : (
              <ChevronDown size={20} color="#666" />
            )}
          </button>

          <div
            style={{
              maxHeight: isOpen(index) ? "500px" : "0",
              overflow: "hidden",
              transition: "max-height 0.5s ease-in-out",
              // borderTop: isOpen(index) ? "1px solid #e2e8f0" : "none",
            }}
          >
            <div style={{ padding: "16px" }}>
              {item.answers.map((ans, i) => (
                <p key={i} style={{ margin: 0, lineHeight: "1.6" }}>
                  {ans}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
