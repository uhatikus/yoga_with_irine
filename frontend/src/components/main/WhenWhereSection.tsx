import useIsMobile from "../../hooks/useIsMobile";
import { useTranslation } from "../../hooks/useTranslation";
import { YogaSession } from "../../translations/types";
import BarcelonaMap from "./Map";

const WhenWhereSection = () => {
  const t = useTranslation();
  const isMobile = useIsMobile();

  const yogaSchedules: YogaSession[] = t.schedule.sessions;
  return (
    <div
      id="schedule_section"
      style={{
        minHeight: "1000px",
        minWidth: isMobile ? "10px" : "700px",
        width: "100%",
        backgroundColor: "white",
        // opacity: 0.8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          minWidth: isMobile ? "10px" : "700px",
          margin: "auto",
          padding: "20px",
          color: "#333",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "46px",
            marginBottom: "20px",
            fontFamily: "Helvetica, sans-serif",
          }}
        >
          {t.schedule.schedule}
        </h2>
        <div
          style={{
            fontSize: "38px",
            minWidth: isMobile ? "10px" : "700px",
            lineHeight: "1.6",
          }}
        >
          {yogaSchedules.map((session, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <span>
                <strong>{session.day}:</strong>
              </span>
              <span style={{ marginLeft: isMobile ? "0" : "auto" }}>
                {session.time}{" "}
              </span>
              <a
                href={session.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  // color: "#3498db",
                  display: "flex",
                  fontSize: "30px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  flexDirection: "row",
                  marginLeft: isMobile ? "0" : "auto",
                }}
              >
                <img
                  src="/assets/images/barcelona-metro-logo.png"
                  alt="Metro"
                  style={{
                    width: "32px",
                    height: "32px",
                    marginRight: "5px",
                    marginBlock: "6px",
                    verticalAlign: "middle",
                  }}
                />
                {session.metro}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div style={{ width: "80%", padding: "20px" }}>
        <BarcelonaMap />
      </div>
    </div>
  );
};

export default WhenWhereSection;
