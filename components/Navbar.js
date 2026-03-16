export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      backgroundColor: "#000",
      color: "#fff"
    }}>
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>Nexora</div>
      <div style={{ display: "flex", gap: "15px" }}>
        <a href="/" style={{ color: "#fff" }}>Home</a>
        <a href="/login" style={{ color: "#fff" }}>Login</a>
        <a href="/signup" style={{ color: "#fff" }}>Signup</a>
        <a href="/dashboard" style={{ color: "#fff" }}>Dashboard</a>
      </div>
    </nav>
  )
}
