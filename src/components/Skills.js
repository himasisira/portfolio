function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "100px 20px",
        background: "#020617",
        color: "white",
        textAlign: "center"
      }}
    >
      <h1 style={{ marginBottom: "40px" }}>My Skills</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          maxWidth: "1100px",
          margin: "auto"
        }}
      >

        {/* Programming Skills */}

        <div
          style={{
            background: "#1e293b",
            padding: "30px",
            borderRadius: "12px",
            textAlign: "left"
          }}
        >
          <h2>Programming Skills</h2>

          {[
              { name: "C", value: "85%" },
            { name: "Java", value: "90%" },
            { name: "Python", value: "65%" },
            { name: "JavaScript", value: "80%" },
            { name: "React", value: "80%" }
          
          ].map((skill) => (
            <div key={skill.name} style={{ marginTop: "15px" }}>
              <p>{skill.name}</p>

              <div
                style={{
                  background: "#334155",
                  borderRadius: "10px",
                  height: "8px"
                }}
              >
                <div
                  style={{
                    width: skill.value,
                    height: "8px",
                    borderRadius: "10px",
                    background: "linear-gradient(90deg,#7c3aed,#38bdf8)"
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Database & Frameworks */}

        <div
          style={{
            background: "#1e293b",
            padding: "30px",
            borderRadius: "12px",
            textAlign: "left"
          }}
        >
          <h2>Database & Frameworks</h2>

          {[
            { name: "MySQL", value: "85%" },
            { name: "MongoDB", value: "80%" },
            { name: "Spring Boot", value: "85%" },
            { name: "React", value: "80%" },
            { name: "Node.js", value: "75%" }
          ].map((skill) => (
            <div key={skill.name} style={{ marginTop: "15px" }}>
              <p>{skill.name}</p>

              <div
                style={{
                  background: "#334155",
                  borderRadius: "10px",
                  height: "8px"
                }}
              >
                <div
                  style={{
                    width: skill.value,
                    height: "8px",
                    borderRadius: "10px",
                    background: "linear-gradient(90deg,#38bdf8,#22c55e)"
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Skills */}

        <div
          style={{
            background: "#1e293b",
            padding: "30px",
            borderRadius: "12px",
            textAlign: "left"
          }}
        >
          <h2>Core Skills</h2>

          <ul style={{ marginTop: "15px", lineHeight: "2" }}>
            <li>Data Structures & Algorithms</li>
            <li>Web Development</li>
            <li>Database Management Systems</li>
            <li>Machine Learning</li>
            <li>Object Oriented Programming</li>
            <li>Problem Solving</li>
          </ul>
        </div>

        {/* Soft Skills */}

        <div
          style={{
            background: "#1e293b",
            padding: "30px",
            borderRadius: "12px"
          }}
        >
          <h2>Soft Skills</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
              marginTop: "20px"
            }}
          >
            {[
              "Leadership",
              "Communication",
              "Problem Solving",
              "Teamwork",
              "Adaptability",
              "Creativity"
            ].map((skill) => (
              <div
                key={skill}
                style={{
                  background: "black",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #334155"
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;