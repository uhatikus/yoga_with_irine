import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";

const FAQAccordion = () => {
  const [openIndexes, setOpenIndexes] = useState(new Set());
  const t = useTranslation();

  const faqData = t.questionAnswers;

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
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        padding: "16px",
      }}
    >
      {faqData.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        >
          <button
            onClick={() => toggleQuestion(index)}
            style={{
              width: "100%",
              padding: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "white",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <span
              style={{
                fontWeight: "500",
                flex: 1,
                paddingRight: "16px",
              }}
            >
              {item.question}
            </span>
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
