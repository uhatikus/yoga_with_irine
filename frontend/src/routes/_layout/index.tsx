import { Box, Container, Text } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { ParallaxSection } from "../../components/common/ParallaxSection";

export const Route = createFileRoute("/_layout/")({
  component: Main,
});

function Main() {
  return (
    <>
      <Container maxW="100%" margin="0" padding="0">
        <ParallaxSection speed={-0.5} className="opacity-fade">
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
        </ParallaxSection>

        <div className="relative w-full h-screen overflow-hidden">
          {/* First background image */}
          {/* <ParallaxSection speed={0.5} className="opacity-fade"> */}
          <div
            className="absolute inset-0 bg-cover bg-center z-10"
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
          ></div>
          {/* </ParallaxSection> */}
          <ParallaxSection speed={-0.5} className="relative z-30">
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
          </ParallaxSection>
          {/* <ParallaxSection speed={0.5} className="opacity-fade"> */}
          <div
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
          ></div>
          {/* </ParallaxSection> */}
          <ParallaxSection speed={-0.5} className="relative z-30">
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
          </ParallaxSection>
        </div>
      </Container>
    </>
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
