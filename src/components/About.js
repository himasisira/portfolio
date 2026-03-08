function About() {
return (
<section
id="about"
style={{
padding: "100px 20px",
background: "#020617",
color: "white",
textAlign: "center"
}}
> <h1>About Me</h1>

  <p
    style={{
      maxWidth: "900px",
      margin: "30px auto",
      lineHeight: "1.8",
      fontSize: "18px"
    }}
  >
   I am Hima Sisira, currently pursuing a B.Tech in Computer Science and Engineering at Koneru Lakshmaiah Educational Foundation. I have a strong interest in Data Structures, Algorithms, and Web Development, and I enjoy building applications using Java, React, and Spring Boot.

I continuously improve my skills through coding platforms and projects, while also developing soft skills like problem-solving, communication, and teamwork to work effectively in professional environments.
  </p>

  <div
    style={{
      marginTop: "40px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      maxWidth: "700px",
      marginInline: "auto",
      textAlign: "left"
    }}
  >
    <p><b>Location:</b> Mellempudi, Andhra Pradesh, India</p>

    <p><b>Email:</b> himasisira30@gmail.com</p>

    <p><b>Degree:</b> B.Tech in Computer Science and Engineering</p>

    <p><b>University:</b> KL University (KLEF)</p>
  </div>

  <a
    href="/resume.pdf"
    target="_blank"
    style={{
      marginTop: "40px",
      display: "inline-block",
      padding: "12px 25px",
      background: "#a409e6",
      color: "black",
      borderRadius: "8px",
      fontWeight: "bold"
    }}
  >
     Resume ⬇
  </a>
</section>

);
}

export default About;
