import React, { useState } from "react";
function App() {
  const [name, setName] = useState("");
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Enter Your Name</h2>
      <input
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Welcome, {name}!</h3>
    </div>
  );
}
export default App;
