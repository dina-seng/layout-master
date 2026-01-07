import { useState } from "react";
import FlexLayout from "./components/Flex";
import GridLayout from "./components/Grid";

function App() {
  const [mode, setMode] = useState("flex");

  return (
    <div className="min-h-screen bg-cyan-950 text-slate-900 p-7 font-sans">
      <header className="mb-8 border-b border-slate-300 pb-4 flex justify-between items-center">
        <h1 className="text-3xl font-black text-cyan-500">Layout Master Pro</h1>
        
        <div className="bg-slate-800 p-1 rounded-xl flex gap-1">
          {["flex", "grid"].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-6 py-2 rounded-lg capitalize transition font-bold ${
                mode === m ? "bg-cyan-500 text-slate-900" : "text-slate-400 hover:text-white"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </header>

      <main>
        {mode === "flex" ? <FlexLayout /> : <GridLayout />}
      </main>
    </div>
  );
}

export default App;