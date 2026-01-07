import { useState } from "react";
import FlexLayout from "./components/Flex";
import GridLayout from "./components/Grid";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  const [mode, setMode] = useState("flex");

  return (
    <div className="min-h-screen bg-cyan-950 text-slate-900 p-7 font-sans">
      <Header mode={mode} setMode={setMode} />
      <main className="max-w-7xl mx-auto p-7">
        {mode === "flex" ? <FlexLayout /> : <GridLayout />}
      </main> 
      <Footer />
    </div> 
    
    
  );
}

export default App;