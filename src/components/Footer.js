function Footer() {
return (
<footer
style={{
background: "#020617",
color: "white",
padding: "40px 20px",
borderTop: "1px solid #1e293b"
}}
>
<div
style={{
maxWidth: "1100px",
margin: "auto",
display: "flex",
justifyContent: "space-between",
alignItems: "center",
flexWrap: "wrap"
}}
>
{/* Left Side */} <div>
<h2 style={{ color: "#a855f7", margin: 0 }}>Hima Sisira</h2>
<p style={{ margin: "5px 0", color: "#94a3b8" }}>
Software Developer </p> </div>

    {/* Right Side Links */}
    <div style={{ display: "flex", gap: "20px" }}>
      <a
        href="https://linkedin.com/in/hima-sisira-264597312"
        target="_blank"
        rel="noreferrer"
        style={{ color: "#94a3b8", textDecoration: "none" }}
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/himasisira"
        target="_blank"
        rel="noreferrer"
        style={{ color: "#94a3b8", textDecoration: "none" }}
      >
        GitHub
      </a>

      <a
        href="mailto:himasisira30@gmail.com"
        style={{ color: "#94a3b8", textDecoration: "none" }}
      >
        Email
      </a>
    </div>
  </div>
</footer>


);
}

export default Footer;
