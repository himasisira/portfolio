function Projects() {
return (
<section
id="projects"
style={{
textAlign: "center",
padding: "100px 20px",
background: "#0f172a",
color: "white"
}}
>
<h1>Projects</h1>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      marginTop: "40px",
      flexWrap: "wrap"
    }}
  >

    {/* Project 1 */}

    <div
      className="project-card"
      style={{
        background: "#1e293b",
        padding: "25px",
        width: "300px",
        borderRadius: "12px",
        color: "white"
      }}
    >
      <img
        src="https://via.placeholder.com/300"
        alt="Hospital Management"
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "10px"
        }}
      />

      <h3>Hospital Management System</h3>

      <p style={{ marginTop: "10px" }}>
        Web application to manage patients, doctors and appointments.
      </p>

      <div style={{ marginTop: "15px" }}>
        <a
          href="https://github.com/himasisira"
          target="_blank"
          rel="noreferrer"
          style={{
            marginRight: "10px",
            padding: "8px 15px",
            background: "#38bdf8",
            color: "black",
            borderRadius: "6px"
          }}
        >
          GitHub
        </a>

        <a
          href="https://github.com/himasisira"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: "8px 15px",
            background: "#a855f7",
            color: "white",
            borderRadius: "6px"
          }}
        >
          Live
        </a>
      </div>
    </div>

    {/* Project 2 */}

    <div
      className="project-card"
      style={{
        background: "#1e293b",
        padding: "25px",
        width: "300px",
        borderRadius: "12px",
        color: "white"
      }}
    >
      <img
        src="https://via.placeholder.com/300"
        alt="Pet Adoption"
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "10px"
        }}
      />

      <h3>Pet Adoption System</h3>

      <p style={{ marginTop: "10px" }}>
        Platform where users can adopt pets and manage adoption requests.
      </p>

      <div style={{ marginTop: "15px" }}>
        <a
          href="https://github.com/himasisira"
          target="_blank"
          rel="noreferrer"
          style={{
            marginRight: "10px",
            padding: "8px 15px",
            background: "#38bdf8",
            color: "black",
            borderRadius: "6px"
          }}
        >
          GitHub
        </a>

        <a
          href="https://github.com/himasisira"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: "8px 15px",
            background: "#a855f7",
            color: "white",
            borderRadius: "6px"
          }}
        >
          Live
        </a>
      </div>
    </div>

  </div>
</section>

);
}

export default Projects;