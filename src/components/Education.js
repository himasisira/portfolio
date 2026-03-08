function Education() {
  return (
    <section
      id="education"
      style={{
        padding: "100px 20px",
        background: "#020617",
        color: "white"
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "60px" }}>
        Education & <span style={{ color: "#a855f7" }}>Certification</span>
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          maxWidth: "1200px",
          margin: "auto"
        }}
      >
        {/* LEFT SIDE EDUCATION */}

        <div>
          <h2 style={{ marginBottom: "20px" }}>Education</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            
            {/* BTech */}
            <div
              style={{
                background: "#1e293b",
                padding: "25px",
                borderRadius: "12px"
              }}
            >
              <h3>B.Tech in Computer Science and Engineering</h3>
              <p>Koneru Lakshmaiah Educational Foundation</p>
              <p>Vijayawada, India</p>
              <p>2023 – 2027</p>
              <p><b>CGPA:</b> 8.63 (till 5th Semester)</p>
            </div>

            {/* Intermediate */}
            <div
              style={{
                background: "#1e293b",
                padding: "25px",
                borderRadius: "12px"
              }}
            >
              <h3>Intermediate</h3>
              <p>Sarada Junior College</p>
              <p>Vijayawada, India</p>
              <p>2021 – 2023</p>
              <p><b>CGPA:</b> 9.14</p>
            </div>

            {/* SSC */}
            <div
              style={{
                background: "#1e293b",
                padding: "25px",
                borderRadius: "12px"
              }}
            >
              <h3>SSC</h3>
              <p>Geetanjali School</p>
              <p>Vijayawada, India</p>
              <p>2021</p>
              <p><b>CGPA:</b> 10</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE CERTIFICATIONS */}

        <div>
          <h2 style={{ marginBottom: "20px" }}>Certifications</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* Juniper */}
            <div
              style={{
                background: "#1e293b",
                padding: "20px",
                borderRadius: "10px"
              }}
            >
              <p><b>Juniper Networking Virtual Internship</b></p>

              <a
                href="https://www.credly.com/badges/c2b0f3b2-34a8-4238-b97a-2152d2dd6c5b/public_url"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#38bdf8" }}
              >
                View Credential
              </a>
            </div>

            {/* Salesforce */}
            <div
              style={{
                background: "#1e293b",
                padding: "20px",
                borderRadius: "10px"
              }}
            >
              <p><b>Salesforce Trailhead Certification</b></p>

              <a
                href="/salesforce.pdf"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#38bdf8" }}
              >
                View Certificate
              </a>
            </div>

            {/* Oracle */}
            <div
              style={{
                background: "#1e293b",
                padding: "20px",
                borderRadius: "10px"
              }}
            >
              <p><b>Oracle Cloud Infrastructure Foundations</b></p>
              

              <a
                href="/oracle.pdf"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#38bdf8" }}
              >
                View Certificate
              </a>
            </div>

          </div>

          {/* INTERNSHIPS */}

          <h2 style={{ marginTop: "40px", marginBottom: "20px" }}>
            Internships
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            <div
              style={{
                background: "#1e293b",
                padding: "20px",
                borderRadius: "10px"
              }}
            >
              <p><b>AIML Virtual Internship</b></p>
              <p>AICTE EduSkills | AWS Academy</p>
              <p>April – June 2025</p>

              <a
                href="/aiml-internship.pdf"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#38bdf8" }}
              >
              
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;