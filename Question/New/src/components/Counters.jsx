import { useState } from 'react';

const Counters = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-xs mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg border border-gray-300">
      <div className="text-right p-4 text-4xl font-bold text-gray-800 border-b border-gray-300">
        {count}
      </div>
      <div className="flex justify-between mt-6 space-x-3">
        <button
          onClick={() => setCount(count + 1)}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded shadow transition duration-300"
          aria-label="Increase count"
        >
          +
        </button>
        <button
          onClick={() => setCount(0)}
          className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 rounded shadow transition duration-300"
          aria-label="Reset count"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded shadow transition duration-300"
          aria-label="Decrease count"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counters;
