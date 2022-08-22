import "./HeroSection";
import { Button } from "../../globalStyles";

import Typical from "react-typical";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="./videos/beach.mp4" autoPlay loop muted />
      <h1> BucketList</h1>
      <p>May the force be with me</p>
      
      <video src="./videos/beach.mp4" autoPlay loop muted />

      <p>
        {" "}
        I love to {""}
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            "write a book 📖",
            3000,
            "go to a Champions league game⚽",
            3000,
            "go to a World Cup game⚽",
            3000,
            "travel cross country by car or by train 🚙",
            3000,
            "go on a safari 🦁",
            6000,
            "swim with sea turtles 🐢",
          ]}
        />
        <h4>May the force be with me</h4>
      </p>
    </div>
  );
}

export default HeroSection;