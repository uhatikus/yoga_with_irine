import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "../../context/LanguageContext";
import BackgroundSections from "../../components/main/BackgroundSections";
import HeaderSection from "../../components/main/HeaderSection";
import FirstTransparentSection from "../../components/main/TransparentSectionFirst";
import SecondTransparentSection from "../../components/main/TransparentSectionSecond";
import ThirdTransparentSection from "../../components/main/TransparentSectionThird";
import AboutSection from "../../components/main/AboutSection";
import FooterSection from "../../components/main/FooterSection";
import WhenWhereSection from "../../components/main/WhenWhereSection";

export const Route = createFileRoute("/_layout/")({
  component: Main,
});

function Main() {
  return (
    <LanguageProvider>
      <div style={{ position: "relative", width: "100%", overflowX: "hidden" }}>
        <BackgroundSections />
        <div style={{ position: "relative", width: "100%" }}>
          <HeaderSection />
          <FirstTransparentSection />
          <AboutSection />
          <SecondTransparentSection />
          <WhenWhereSection />
          <ThirdTransparentSection />
          <FooterSection />
        </div>
      </div>
    </LanguageProvider>
  );
}
