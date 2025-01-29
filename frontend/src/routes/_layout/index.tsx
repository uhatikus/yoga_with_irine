import { createFileRoute } from "@tanstack/react-router";
import { ParallaxSection } from "../../components/common/ParallaxSection";
import { Carousel } from "../../components/common/Carousel";
// import React, { useEffect, useState } from "react";

export const Route = createFileRoute("/_layout/")({
  component: Main,
});

function Main() {
  return (
    <div
      style={{
        position: "relative",
        // height: "400vh",
        width: "100%",
        // overflowX: "hidden",
      }}
    >
      {/* Background sections - slower movement */}
      <ParallaxSection speed={-0.5}>
        {/* Firt background section */}
        <div
          style={{
            backgroundImage: "url(assets/images/YOGA_MAIN_good.jpg)",
            backgroundSize: "cover",
            width: "100%",
            height: "1000px",
            backgroundColor: "white",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "115px 0 -60px 0",
          }}
        ></div>

        {/* Second background section */}
        <div
          style={{
            backgroundImage: "url(assets/images/YOGA_IN_PARK.jpg)",
            width: "100%",
            height: "1500px",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundPosition: "center",
            backgroundSize: "cover",
            margin: "0 0 -500px 0",
          }}
        ></div>
        {/* Third background section */}
        <div
          style={{
            backgroundImage: "url(assets/images/YOGA_IN_STUDIO.jpg)",
            width: "100%",
            height: "1500px",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </ParallaxSection>

      {/* Foreground sections with transparent gaps */}
      <div style={{ position: "relative" }}>
        {/* First cotent section */}
        <div
          style={{
            height: "100px",
            width: "100%",
            backgroundColor: "white",
            // opacity: 0.8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Text fontSize="50" color="#3399ff" opacity="50%">
            Yoga Open Soul
          </Text> */}
          <h2
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              color: "#3399ff",
              opacity: "50%",
            }}
          >
            Yoga Open Soul
          </h2>
        </div>

        {/* FIRST Transparent gap */}
        <div
          style={{
            height: "950px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Welcome
          </h2>
        </div>

        {/* Second content section */}
        <div
          style={{
            height: "1100px",
            width: "100%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              height: "400px",
              fontSize: "4rem",
              fontWeight: "bold",
              color: "black",
              // backgroundColor: "yellow",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            I am the best yoga teacher. Now I will explain why
          </h2>
          <div
            style={{
              height: "500px",
            }}
          >
            <Carousel
              images={[
                "assets/images/YOGA_IN_PARK.jpg",
                "assets/images/YOGA_MAIN.jpg",
                "assets/images/Tibidabo.jpg",
                "assets/images/YOGA_IN_STUDIO.jpg",
                "assets/images/test.jpg",
              ]}
            />
          </div>
        </div>

        {/* Second Transparent gap */}
        <div
          style={{
            height: "1000px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Open Your Soul to Yourself
          </h2>
        </div>

        {/* Third contet section */}
        <div
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
        </div>
        {/* Transparent gap */}
        <div
          style={{
            height: "1000px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Feel the universe
          </h2>
        </div>

        {/* Third colored section */}
        <div
          style={{
            height: "1200px",
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
            All reviews are great. <br></br>
            You can find us on the map.<br></br>
            Some contacts will be here.
          </h2>
        </div>
      </div>
    </div>
  );
}
