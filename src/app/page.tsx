"use client";

import { useState, useEffect } from "react";
import Props from "./props";
export default function Home() {
  const [count, setCount] = useState(0);
  const name: string = "Jose";

  useEffect(() => {
    if (count > 0) {
      alert(`Le compteur est maintenant à ${count}`);
    }
  }, [count]); // Se déclenche à chaque changement de count.

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <Props name={name} />
      <h1>Compteur : {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        Reset maintenant
      </button>
    </main>
  );
}
