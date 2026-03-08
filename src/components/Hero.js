import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="hero"
      style={{
        textAlign: "center",
        padding: "150px 20px",
        background: "#020617",
        color: "white"
      }}
    >
      <h1>
        Hi, I'm <span style={{color:"#a855f7"}}>Hima Sisira</span> 👋
      </h1>

      {/* Animated text */}
      <h2 style={{marginTop:"20px", color:"#38bdf8"}}>
        <TypeAnimation
          sequence={[
              "Software Developer",
            2000,
            "Full Stack Developer",
            2000,
            "Java Developer",
            2000,
    
          ]}
          speed={50}
          repeat={Infinity}
        />
      </h2>

      <p style={{marginTop:"20px"}}>
       Crafting modern web applications with Java, React and Spring Boot.

      </p>

      <div style={{marginTop:"30px"}}>
        <a
          href="#contact"
          style={{
            background:"#a855f7",
            padding:"12px 25px",
            borderRadius:"8px",
            marginRight:"15px",
            color:"white",
            fontWeight:"bold"
          }}
        >
          Contact Me
        </a>

        <a
          href="#projects"
          style={{
            background:"#a855f7",
            padding:"12px 25px",
            borderRadius:"8px",
            color:"white",
            fontWeight:"bold"
          }}
        >
          View Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;