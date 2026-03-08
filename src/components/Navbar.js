function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#020617",
        color: "white",
        position: "sticky",
        top: "0",
        zIndex: "1000"
      }}
    >
      {/* Logo / Name */}
      <h2>
        <a
          href="#hero"
          style={{
            color: "#9508f3",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Hima Sisira
        </a>
      </h2>

      {/* Navigation Links */}
      <div>
        <a href="#about" style={{ margin: "15px", color: "white", textDecoration: "none" }}>
          About
        </a>

        <a href="#skills" style={{ margin: "15px", color: "white", textDecoration: "none" }}>
          Skills
        </a>

        <a href="#projects" style={{ margin: "15px", color: "white", textDecoration: "none" }}>
          Projects
        </a>

        <a href="#coding" style={{ margin: "15px", color: "white", textDecoration: "none" }}>
          Coding
        </a>

        <a href="#contact" style={{ margin: "15px", color: "white", textDecoration: "none" }}>
          Contact
        </a>

      </div>
    </nav>
  );
}

export default Navbar;