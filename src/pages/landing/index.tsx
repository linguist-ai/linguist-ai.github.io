import { Container } from "@mantine/core";
import { FeaturesSection } from "./features-section/FeaturesSection";
import { HeroSection } from "./hero-section/HeroSection";

const LandingPage = () => {
  return (
    <Container maw={1200}>
      <HeroSection />
      <FeaturesSection />
    </Container>
  );
};

export default LandingPage;
