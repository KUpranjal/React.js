import { useState } from "react";

export default function App() {
  const [val, setVal] = useState("");

  return (
    <div>
      <input
        onChange={(e) => setVal(e.target.value)}
        type="text"
        placeholder="Name"
        className="border p-2 rounded"
      />
      
      {val.length > 0 && (
        <h1 className="text-5xl">Welcome, {val}</h1>
      )}
    </div>
  );
}
