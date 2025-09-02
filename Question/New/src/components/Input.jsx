import React, { useState } from 'react';

function Input() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg border border-gray-300">
      <div className="flex gap-3 mb-4">
        <input
          className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={text}
          type="text"
          placeholder="Enter item"
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && text.trim() !== "") {
              setItems([text.trim(), ...items]);
              setText("");
            }
          }}
        />
        <button
          disabled={text.trim() === ""}
          onClick={() => {
            setItems([text.trim(), ...items]);
            setText("");
          }}
          className={`px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed`}
        >
          Add
        </button>
      </div>
      {items.length > 0 && (
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          {items.map((item, index) => (
            <li key={index} className="border-b border-gray-200 py-1">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Input;
