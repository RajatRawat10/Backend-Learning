import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <div className="min-h-screen bg-gray-900 p-6">
        <p className="text-white text-lg mb-6">
          Jokes: <span className="font-semibold">{jokes.length}</span>
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jokes.map((joke) => (
            <div
              key={joke.id}
              className="bg-gray-800 text-white p-5 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold mb-2 text-indigo-400">
                {joke.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {joke.joke}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
