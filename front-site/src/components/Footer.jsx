import React from "react"; 
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
   // Added fixed, left-0, and z-50
 <footer className="bg-slate-800 border-t border-slate-700 px-6 py-4 mx-auto  fixed bottom-0 left-0 right-0">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">
          © 2026 Layout Master Pro. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/dina-seng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
          >
            <Github size={18} />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/seng-dina-682a72381/ "
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
          >
            <Linkedin size={18} />
            <span className="text-sm">LinkedIn</span>
          </a>
          <span className="text-slate-500 text-sm">v1.0.0</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
