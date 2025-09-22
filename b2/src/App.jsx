import { useState } from "react";

function ColorBox({ color }) {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid black",
        marginTop: "10px",
        backgroundColor: color,
      }}
    ></div>
  );
}

function App() {
  const [color, setColor] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h2>Bài 2: Color Picker</h2>
      <button onClick={() => setColor("red")}>Đỏ</button>
      <button onClick={() => setColor("blue")}>Xanh</button>
      <button onClick={() => setColor("yellow")}>Vàng</button>

      {/* Hiển thị ô màu */}
      <ColorBox color={color} />
    </div>
  );
}
export default App;