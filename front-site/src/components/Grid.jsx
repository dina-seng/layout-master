import { useState } from "react";

export default function Grid() {
  const [cols, setCols] = useState(3);
  const [gap, setGap] = useState(4);

  const cssCode = `.container {
  display: grid;
  grid-template-columns: repeat(${cols}, minmax(0, 1fr));
  gap: ${gap * 0.25}rem;
}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-9">
      <section className="lg:col-span-4">
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h2 className="text-xl font-bold mb-4 text-orange-400">Grid Controls</h2>
          
          <div className="mb-6">
            <h3 className="text-sm text-slate-400 mb-4">COLUMNS: {cols}</h3>
            <input 
              type="range" min="1" max="6" value={cols} 
              onChange={(e) => setCols(e.target.value)}
              className="w-full accent-orange-500"
            />
          </div>

          <div>
            <h3 className="text-sm text-slate-400 mb-4">GAP: {gap}</h3>
            <input 
              type="range" min="0" max="12" value={gap} 
              onChange={(e) => setGap(e.target.value)}
              className="w-full accent-orange-500"
            />
          </div>
        </div>
      </section>

      <section className="lg:col-span-8 space-y-8">
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-600">
          <div 
            className="bg-slate-900 grid border-2 border-dashed border-slate-700 p-5"
            style={{ 
              gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
              gap: `${gap * 4}px` 
            }}
          >
             {[1, 2, 3, 4, 5, 6].map(i => (
               <div key={i} className="h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center font-bold">ITEM {i}</div>
             ))}
          </div>
        </div>
        <pre className="bg-slate-900 p-6 rounded-xl text-emerald-400 font-mono text-sm">{cssCode}</pre>
      </section>
    </div>
  );
}