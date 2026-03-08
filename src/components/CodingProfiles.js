import { SiLeetcode, SiHackerrank, SiCodechef, SiGithub } from "react-icons/si";

function CodingProfiles() {
return (
<section
id="coding"
style={{
padding: "100px 20px",
textAlign: "center",
background: "#020617",
color: "white"
}}
>
<h1 style={{ marginBottom: "40px" }}>Coding Profiles</h1>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "30px"
    }}
  >

    {/* LeetCode */}

    <div
      style={{
        background: "#1e293b",
        padding: "30px",
        borderRadius: "12px",
        width: "220px"
      }}
    >
      <SiLeetcode size={40} color="#FFA116" />

      <h3 style={{ marginTop: "10px" }}>LeetCode</h3>

      <a
        href="https://leetcode.com/u/klu2300032673/"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          marginTop: "15px",
          padding: "10px 20px",
          background: "#38bdf8",
          color: "black",
          borderRadius: "8px",
          fontWeight: "bold"
        }}
      >
        View Profile
      </a>
    </div>

    {/* HackerRank */}

    <div
      style={{
        background: "#1e293b",
        padding: "30px",
        borderRadius: "12px",
        width: "220px"
      }}
    >
      <SiHackerrank size={40} color="#00EA64" />

      <h3 style={{ marginTop: "10px" }}>HackerRank</h3>

      <a
        href="https://www.hackerrank.com/profile/himasisira30"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          marginTop: "15px",
          padding: "10px 20px",
          background: "#38bdf8",
          color: "black",
          borderRadius: "8px",
          fontWeight: "bold"
        }}
      >
        View Profile
      </a>
    </div>

    {/* CodeChef */}

    <div
      style={{
        background: "#1e293b",
        padding: "30px",
        borderRadius: "12px",
        width: "220px"
      }}
    >
      <SiCodechef size={40} color="#5B4638" />

      <h3 style={{ marginTop: "10px" }}>CodeChef</h3>

      <a
        href="https://www.codechef.com/users/kl2300032673"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          marginTop: "15px",
          padding: "10px 20px",
          background: "#38bdf8",
          color: "black",
          borderRadius: "8px",
          fontWeight: "bold"
        }}
      >
        View Profile
      </a>
    </div>

    {/* GitHub */}

    <div
      style={{
        background: "#1e293b",
        padding: "30px",
        borderRadius: "12px",
        width: "220px"
      }}
    >
      <SiGithub size={40} color="white" />

      <h3 style={{ marginTop: "10px" }}>GitHub</h3>

      <a
        href="https://github.com/himasisira"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          marginTop: "15px",
          padding: "10px 20px",
          background: "#38bdf8",
          color: "black",
          borderRadius: "8px",
          fontWeight: "bold"
        }}
      >
        View Profile
      </a>
    </div>

  </div>
</section>


);
}

export default CodingProfiles;
