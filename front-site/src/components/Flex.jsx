import { useState } from "react"; 
import Footer from "./Footer";

const justifyMap = {
  "justify-start": "flex-start",
  "justify-center": "center",
  "justify-end": "flex-end",
  "justify-between": "space-between",
  "justify-around": "space-around",
};

export default function Flex() {
  const [flexDir, setFlexDir] = useState("row");
  const [justify, setJustify] = useState("justify-between");

  const cssCode = `.container {
  display: flex;
  flex-direction: ${flexDir};
  justify-content: ${justifyMap[justify]};
  gap: 1rem;
}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-9">
      {/* Controls */}
      <section className="lg:col-span-4">
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h2 className="text-xl font-bold mb-4 text-pink-400">Flexbox Controls</h2>
          
          <div className="mb-6">
            <h3 className="text-sm text-slate-400 mb-4">DIRECTION</h3>
            <div className="flex gap-2">
              {["row", "column"].map((dir) => (
                <button
                  key={dir}
                  onClick={() => setFlexDir(dir)}
                  className={`px-4 py-2 rounded-lg uppercase ${flexDir === dir ? "bg-pink-500 text-white" : "bg-slate-700 text-slate-300"}`}
                >
                  {dir}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm text-slate-400 mb-2">JUSTIFY CONTENT</h3>
            <select
              value={justify}
              onChange={(e) => setJustify(e.target.value)}
              className="w-full bg-slate-500 p-2 rounded-lg text-cyan-400 outline-none"
            >
              {Object.keys(justifyMap).map(key => (
                <option key={key} value={key}>{key.replace('justify-', '')}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Preview & Code */}
      <section className="lg:col-span-8 space-y-8">
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-600">
          <div className={`bg-slate-900 flex ${flexDir === 'column' ? 'flex-col' : 'flex-row'} ${justify} gap-4 p-5 border-2 border-dashed border-slate-700`}>
             {[1, 2, 3].map(i => (
               // Change this line in your .map() functions:
<div key={i} className="min-w-[60px] min-h-[60px] md:w-24 md:h-24 bg-linear-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center font-bold text-xs md:text-base">
  ITEM {i}
</div>
             ))}
          </div>
        </div>
        <pre className="bg-slate-900 p-6 rounded-xl text-emerald-400 font-mono text-sm">{cssCode}</pre>
      </section> 

    </div> 

    
  );
}