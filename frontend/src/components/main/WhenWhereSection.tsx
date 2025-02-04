import BarcelonaMap from "./Map";

const WhenWhereSection = () => {
  return (
    <div
      id="schedule_section"
      style={{
        height: "1000px",
        width: "100%",
        backgroundColor: "white",
        // opacity: 0.8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "black",
        }}
      >
        Second Content Section. <br></br>Here is my schedule: <br></br>
        Tuesday: 19:30-21:00 <br></br> Friday: 19:30-21:00<br></br> Sunday:
        12:15-13:45
      </h2>
      <BarcelonaMap />
    </div>
  );
};

export default WhenWhereSection;
