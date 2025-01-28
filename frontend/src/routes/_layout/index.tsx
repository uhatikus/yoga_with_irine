import { Container, Text } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { ParallaxSection } from "../../components/common/ParallaxSection";
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
            backgroundImage: "url(assets/images/YOGA_MAIN.jpg)",
            // "linear-gradient(to bottom, rgba(255, 255, 255, 1) 500px, rgba(255, 255, 255, 0.8) 520px, rgba(255, 255, 255, 0.6) 540px, rgba(255, 255, 255, 0.3) 560px, rgba(255, 255, 255, 0.15) 580px, rgba(255, 255, 255, 0) 600px),  url(assets/images/YOGA_MAIN.jpg)",
            backgroundSize: "cover",
            width: "100%",
            height: "1500px",
            backgroundColor: "#3b82f6",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // margin: "-400px 0 -100px 0",
          }}
        ></div>

        {/* Second background section */}
        <div
          style={{
            backgroundImage: "url(assets/images/YOGA_MAIN.jpg)",
            width: "100%",
            height: "1500px",
            backgroundColor: "#22c55e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        {/* Third background section */}
        {/* <div
          style={{
            backgroundImage: "url(assets/images/YOGA_MAIN.jpg)",
            width: "100%",
            height: "1500px",
            backgroundColor: "#22c55e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div> */}
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
            Welcome
          </h2>
        </div>

        {/* Second content section */}
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
            First Content Section
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
            Second Content Section
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
            Third Content Section
          </h2>
        </div>
      </div>
    </div>
  );
}

{
  /* <div
            className="absolute inset-0 bg-cover bg-center z-10"
            style={{
              backgroundImage: "url(/assets/images/YOGA_MAIN.jpg)",
              opacity: 0.7,
            }}
          /> */
}
{
  /* Second background image */
}
{
  /* <div
            className="absolute inset-0 bg-cover bg-center z-20"
            style={{
              backgroundImage: "url(/assets/images/YOGA_MAIN.jpg)",
              opacity: 0.5,
              mixBlendMode: "overlay",
            }}
          /> */
}
{
  /* Content overlay */
}
{
  /* <div className="relative z-30 text-white p-4">
            <h1>Your Content Here</h1>
          </div> */
}

// function Main() {
//   return (
//     <>
//       <Container maxW="100%" margin="0" padding="0">
//         {/* <ParallaxSection speed={-0.5} className="opacity-fade"> */}
//         <div
//           className="opacity-fade"
//           style={{
//             width: "100%",
//             height: "800px",
//             backgroundColor: "white",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Text fontSize="50" color="#3399ff" opacity="50%">
//             Yoga Open Soul
//           </Text>
//         </div>
//         {/* </ParallaxSection> */}

//         <div className="relative w-full h-screen overflow-hidden">
//           {/* First background image */}
//           <ParallaxSection speed={0.5} className="opacity-fade">
//             <div
//               className="absolute inset-0 bg-cover bg-center z-10"
//               style={{
//                 backgroundImage:
//                   // "url(assets/images/YOGA_MAIN.jpg)",
//                   "linear-gradient(to bottom, rgba(255, 255, 255, 1) 500px, rgba(255, 255, 255, 0.8) 520px, rgba(255, 255, 255, 0.6) 540px, rgba(255, 255, 255, 0.3) 560px, rgba(255, 255, 255, 0.15) 580px, rgba(255, 255, 255, 0) 600px),  url(assets/images/YOGA_MAIN.jpg)",
//                 height: "1500px",
//                 width: "100%",
//                 margin: "-500px 0 -100px 0",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             ></div>
//           </ParallaxSection>
//           {/* <ParallaxSection speed={-0.5} className="relative z-30"> */}
//           <div
//             style={{
//               width: "100%",
//               height: "300px",
//               backgroundColor: "white",
//               // margin: "0 0 -600px 0",
//             }}
//           >
//             <Text fontSize="90" color="#ff99ff" opacity="50%">
//               Yoga Open Soul
//             </Text>
//           </div>
//           {/* </ParallaxSection> */}
//           <ParallaxSection speed={0.5} className="opacity-fade">
//             <div
//               className="absolute inset-0 bg-cover bg-center z-20"
//               style={{
//                 backgroundImage: "url(assets/images/YOGA_MAIN.jpg)",
//                 // "linear-gradient(to bottom, rgba(255, 255, 255, 1) 500px, rgba(255, 255, 255, 0.8) 520px, rgba(255, 255, 255, 0.6) 540px, rgba(255, 255, 255, 0.3) 560px, rgba(255, 255, 255, 0.15) 580px, rgba(255, 255, 255, 0) 600px),  url(assets/images/YOGA_MAIN.jpg)",
//                 height: "1500px",
//                 width: "100%",
//                 margin: "0px 0 0px 0",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             ></div>
//           </ParallaxSection>
//           {/* <ParallaxSection speed={-0.5} className="relative z-30"> */}
//           <div
//             style={{
//               width: "100%",
//               height: "1000px",
//               backgroundColor: "white",
//             }}
//           >
//             <Text fontSize="90" color="#ff99ff" opacity="50%">
//               Yoga Open Soul
//             </Text>
//           </div>
//           {/* </ParallaxSection> */}
//         </div>
//       </Container>
//     </>
//   );
// }

<>
  <Container maxW="100%" margin="0" padding="0">
    <div className="relative w-full h-screen overflow-hidden">
      {/* <ParallaxSection speed={-0.5} className="opacity-fade"> */}
      <div
        className="opacity-fade"
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text fontSize="50" color="#3399ff" opacity="50%">
          Yoga Open Soul
        </Text>
      </div>
      {/* </ParallaxSection> */}
      {/* First background image */}
      <ParallaxSection speed={0.5}>
        {/* <div
              className="z-10"
              style={{
                backgroundImage:
                  // "url(assets/images/YOGA_MAIN.jpg)",
                  "linear-gradient(to bottom, rgba(255, 255, 255, 1) 500px, rgba(255, 255, 255, 0.8) 520px, rgba(255, 255, 255, 0.6) 540px, rgba(255, 255, 255, 0.3) 560px, rgba(255, 255, 255, 0.15) 580px, rgba(255, 255, 255, 0) 600px),  url(assets/images/YOGA_MAIN.jpg)",
                height: "1500px",
                width: "100%",
                margin: "-500px 0 -100px 0",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div> */}
        <div className="z-10 relative">
          {" "}
          {/* Added relative for positioning overlay */}
          <img
            src="/assets/images/YOGA_MAIN.jpg"
            alt="Yoga" // Add a descriptive alt text
            style={{
              height: "1500px",
              width: "100%",
              objectFit: "cover", // Maintain aspect ratio and cover the area
              position: "absolute", // Allow overlay to be positioned
              top: 0,
              left: 0,
            }}
          />
          <div // Overlay with gradient
            style={{
              position: "absolute", // Position over the image
              top: 0,
              left: 0,
              width: "100%",
              height: "600px", // Match the gradient height
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 1) 500px, rgba(255, 255, 255, 0.8) 520px, rgba(255, 255, 255, 0.6) 540px, rgba(255, 255, 255, 0.3) 560px, rgba(255, 255, 255, 0.15) 580px, rgba(255, 255, 255, 0) 600px)",
            }}
          />
          {/* Content that you want to appear over the image and the gradient */}
          <div
            className="relative z-20"
            style={{
              /* Add any styles you want here */ paddingTop: "500px",
              paddingLeft: "50px",
            }}
          >
            {/* Your content here */}
            <h1>Yoga</h1>
            <p>Some yoga text...</p>
          </div>
        </div>
      </ParallaxSection>
      {/* <ParallaxSection speed={-0.5} className="relative z-30"> */}
      <div
        style={{
          width: "100%",
          height: "300px",
          backgroundColor: "white",
          // margin: "0 0 -600px 0",
        }}
      >
        <Text fontSize="90" color="#ff99ff" opacity="50%">
          Yoga Open Soul
        </Text>
      </div>
      {/* </ParallaxSection>  */}
      {/* <ParallaxSection speed={0.5} className="opacity-fade"> */}
      {/* <div
            className="absolute inset-0 bg-cover bg-center z-20"
            style={{
              backgroundImage: "url(assets/images/YOGA_MAIN.jpg)",
              // "linear-gradient(to bottom, rgba(255, 255, 255, 1) 500px, rgba(255, 255, 255, 0.8) 520px, rgba(255, 255, 255, 0.6) 540px, rgba(255, 255, 255, 0.3) 560px, rgba(255, 255, 255, 0.15) 580px, rgba(255, 255, 255, 0) 600px),  url(assets/images/YOGA_MAIN.jpg)",
              height: "1500px",
              width: "100%",
              margin: "0px 0 0px 0",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div> */}
      {/* </ParallaxSection> */}
      {/* <ParallaxSection speed={-0.5} className="relative z-30">
            <div
              style={{
                width: "100%",
                height: "1000px",
                backgroundColor: "white",
              }}
            >
              <Text fontSize="90" color="#ff99ff" opacity="50%">
                Yoga Open Soul
              </Text>
            </div>
          </ParallaxSection> */}
    </div>
  </Container>
</>;
