import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQAccordion = () => {
  const [openIndexes, setOpenIndexes] = useState(new Set());

  const faqData = [
    {
      question: "What languages do you speak?",
      answer:
        "The classes are in English, and also I can assist in Russian and un poco de español :)",
    },
    {
      question: "What's the level?",
      answer:
        "The level is open. It's perfect for beginners and I also suggest variations for the intermediate level.",
    },
    {
      question: "Can I try for free?",
      answer: "Yes, of course!",
    },
    {
      question: "Is that okay if I've never done yoga before?",
      answer:
        "Yes, of course. A lot of people with no experience in yoga come to my classes :) And actually they really enjoy them and start their journey in yoga.",
    },
    {
      question: "Do you usually have brunches afterwards?",
      answer:
        "Yes, there we can get to know each other better and spend time together having delicious dishes :)",
    },
    {
      question: "What is your education?",
      answer:
        "By education, I'm a medical chemist. So I worked as a scientist in a biology laboratory. Since 2012 I have been practicing yoga with a wonderful teacher. So now it's my 12th year in yoga. In 2023 I studied for 9 months at an Indian school Arhanta Yoga and became a certified yoga teacher.",
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
              transition: "max-height 0.3s ease-in-out",
              borderTop: isOpen(index) ? "1px solid #e2e8f0" : "none",
            }}
          >
            <div style={{ padding: "16px" }}>
              <p style={{ margin: 0, lineHeight: "1.6" }}>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
