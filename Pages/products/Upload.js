export default function UploadProduct() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Upload Product</h1>

      <form style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "400px",
        margin: "auto"
      }}>
        
        <input type="text" placeholder="Product Title" />

        <input type="number" placeholder="Price" />

        <textarea placeholder="Product Description"></textarea>

        <button type="submit">Upload Product</button>

      </form>
    </div>
  )
}
