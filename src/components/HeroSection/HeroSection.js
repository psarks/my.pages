import '../HeroSection/HeroSection.elements.css'
import Beach from '../../videos/beach.mp4'
import Typical from "react-typical";

function HeroSection() {
  return (
    <div className="main">
      <video src={Beach} autoPlay loop muted/>
      <div className="hero-container">
        <p>
          I love to {""}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "write a book 📖",
              6000,
              "go to a Champions league game⚽",
              6000,
              "go to a World Cup game⚽",
              6000,
              "travel cross country by car or by train 🚙",
              6000,
              "go on a safari 🦁",
              6000,
              "swim with sea turtles 🐢",
            ]}
          />
        </p>
        <h5>May the force be with me</h5>

      </div>
    </div>
  );
}

export default HeroSection;
