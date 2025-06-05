import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Button from "./components/Button";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Particles from "./components/Particles";
import Section from "./components/Section";
import Services from "./components/Services";
import Threads from "./components/Threads";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
      </div>
      <ButtonGradient />
      <Section>
        <div style={{ width: "100%", height: "25rem", position: "relative" }}>
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        </div>
      </Section>
    </>
  );
};

export default App;
