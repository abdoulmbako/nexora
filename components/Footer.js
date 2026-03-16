export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#000",
      color: "#fff",
      textAlign: "center",
      padding: "20px",
      marginTop: "40px"
    }}>
      <p>&copy; {new Date().getFullYear()} Nexora. All rights reserved.</p>
      <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "15px" }}>
        <a href="/about" style={{ color: "#fff" }}>About</a>
        <a href="/contact" style={{ color: "#fff" }}>Contact</a>
        <a href="/terms" style={{ color: "#fff" }}>Terms</a>
      </div>
    </footer>
  )
}
