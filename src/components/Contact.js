import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 20px",
        background: "#020617",
        color: "white"
      }}
    >
      <h2 style={{textAlign:"center", marginBottom:"40px"}}>Contact</h2>

      <div style={{maxWidth:"900px", margin:"auto", display:"flex", gap:"40px", flexWrap:"wrap"}}>

        {/* Left Side */}
        <div style={{flex:"1"}}>

          {/* Email */}
          <div style={{display:"flex", alignItems:"center", marginBottom:"25px"}}>
            <div style={{
              background:"#581c87",
              padding:"15px",
              borderRadius:"50%",
              marginRight:"15px"
            }}>
              <FaEnvelope size={20}/>
            </div>

            <div>
              <p style={{color:"#94a3b8"}}>Email</p>
              <p style={{color:"#a855f7"}}>himasisira30@gmail.com</p>
            </div>
          </div>

          {/* Location */}
          <div style={{display:"flex", alignItems:"center", marginBottom:"25px"}}>
            <div style={{
              background:"#581c87",
              padding:"15px",
              borderRadius:"50%",
              marginRight:"15px"
            }}>
              <FaMapMarkerAlt size={20}/>
            </div>

            <div>
              <p style={{color:"#94a3b8"}}>Location</p>
              <p style={{color:"#a855f7"}}>Mellempudi, Andhra Pradesh, India</p>
            </div>
          </div>

          {/* Social Icons */}
          <div style={{display:"flex", gap:"15px", marginTop:"20px"}}>

            <a
              href="https://linkedin.com/in/hima-sisira-264597312"
              target="_blank"
              rel="noreferrer"
              style={{
                background:"#7e22ce",
                padding:"15px",
                borderRadius:"50%",
                color:"white"
              }}
            >
              <FaLinkedin size={18}/>
            </a>

            <a
              href="https://github.com/himasisira"
              target="_blank"
              rel="noreferrer"
              style={{
                background:"#7e22ce",
                padding:"15px",
                borderRadius:"50%",
                color:"white"
              }}
            >
              <FaGithub size={18}/>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;